// api/whatsapp.js
const { createClient } = require('@supabase/supabase-js');

// Initialize Supabase using Environment Variables
const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_ANON_KEY);

// A secret password to prove to Meta that we are the real Reflex server
const VERIFY_TOKEN = "reflex_secret_token_123";

module.exports = async (req, res) => {
    
    // 1. META VERIFICATION (GET Request)
    if (req.method === 'GET') {
        const mode = req.query['hub.mode'];
        const token = req.query['hub.verify_token'];
        const challenge = req.query['hub.challenge'];

        if (mode === 'subscribe' && token === VERIFY_TOKEN) {
            console.log("✅ Webhook verified!");
            return res.status(200).send(challenge);
        } else {
            console.log("❌ Verification failed");
            return res.status(403).send("Verification failed");
        }
    }

    // 2. INCOMING WHATSAPP MESSAGES (POST Request)
    if (req.method === 'POST') {
        try {
            const body = req.body;
            
            // Dig into the complex JSON Meta sends us to find the message
            const changes = body.entry?.[0]?.changes?.[0]?.value;
            const messages = changes?.messages;

            if (messages && messages.length > 0) {
                const message = messages[0];
                const senderPhone = message.from; // The retailer's WhatsApp number
                const messageText = message.text?.body || "No text provided";

                console.log(` New WhatsApp order from ${senderPhone}: ${messageText}`);

                // Save the order directly to our Supabase database!
                const { error } = await supabase.from('orders').insert({
                    retailer_id: 1, // For now, we assign all WhatsApp orders to "Nairobi Electronics"
                    customer_name: "WhatsApp Customer",
                    customer_phone: senderPhone,
                    address: "To be confirmed via chat",
                    item_description: messageText,
                    status: 'pending'
                });

                if (error) {
                    console.error("❌ Supabase Error:", error);
                } else {
                    console.log("✅ Order saved to database!");
                }
            }

            // Meta requires us to send a 200 OK immediately so they know we got it
            return res.status(200).send("EVENT_RECEIVED");
            
        } catch (err) {
            console.error("Server Error:", err);
            return res.status(500).send("SERVER_ERROR");
        }
    }

    return res.status(405).send("METHOD_NOT_ALLOWED");
};
