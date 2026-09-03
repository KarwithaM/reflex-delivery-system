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
            
            // Dig into the complex JSON Meta sends us
            const changes = body.entry?.[0]?.changes?.[0]?.value;
            const messages = changes?.messages;

            if (messages && messages.length > 0) {
                const message = messages[0];
                
                // Extract the REAL data from the payload
                const senderPhone = message.from; 
                const messageText = message.text?.body || "No text provided";
                const senderName = message.contacts?.[0]?.profile?.name || "Unknown Retailer";

                console.log(` New Order from ${senderName} (${senderPhone}): "${messageText}"`);

                // Save to Supabase with REAL data!
                const { error } = await supabase.from('orders').insert({
                    retailer_id: 1, // Assigning to Nairobi Electronics for now
                    customer_name: senderName, // Real name from WhatsApp profile!
                    customer_phone: senderPhone, // Real phone number!
                    address: "Pending confirmation via chat",
                    item_description: messageText, // The actual order text!
                    status: 'pending'
                });

                if (error) {
                    console.error("❌ Supabase Error:", error.message);
                    return res.status(500).send("DATABASE_ERROR");
                } else {
                    console.log("✅ Order saved successfully!");
                }
            }

            // Always return 200 OK to Meta so they stop retrying
            return res.status(200).send("EVENT_RECEIVED");
            
        } catch (err) {
            console.error("Server Error:", err.message);
            return res.status(500).send("SERVER_ERROR");
        }
    }

    return res.status(405).send("METHOD_NOT_ALLOWED");
};
