# Reflex: Trade-off Log

## 1. WhatsApp API Costs vs. Ease of Use
**The Weakness:** Using the WhatsApp Business API costs money per conversation. If a retailer sends 1,000 messages a day, the bill will be high.
**Why I accepted it:** Retailers in Kenya already use WhatsApp for everything. If I force them to download a new app, they won't use it. The cost is worth the high adoption rate.
**What I'd do with more time:** I would add a free USSD menu option for smaller retailers who want to avoid WhatsApp costs.

## 2. Rider Network Connectivity (Offline Mode)
**The Weakness:** If a rider goes to a rural area in Nyeri or Murang'a and loses internet, they cannot click "Delivered" on the web link. The system will show the order as "stuck."
**Why I accepted it:** Building a full offline-first mobile app that syncs later takes months. For this sprint, I am assuming riders have basic 3G/4G in the delivery zones.
**What I'd do with more time:** I would build a native Android app that stores the status locally and automatically uploads it when the rider gets back online.

## 3. Manual Dispatcher Bottleneck
**The Weakness:** The dispatcher has to manually look at the map and assign a rider. If 50 orders come in at once, the dispatcher will be overwhelmed and slow.
**Why I accepted it:** Automated routing (like Uber uses) is extremely complex and expensive to build. Manual assignment is perfect for a small shop with 5 riders.
**What I'd do with more time:** I would add an "Auto-Assign" feature that automatically sends the order to the closest available rider based on GPS location.
