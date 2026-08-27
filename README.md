# Reflex: Delivery Management System for Kenyan Retailers

##  The Problem
Small Kenyan retailers (electronics shops, pharmacies, hardware stores) currently coordinate deliveries over WhatsApp and phone calls. This creates:
- No record of who's assigned to what delivery
- No visibility into delivery status
- No proof of delivery
- Chaotic, untrackable operations

##  The Solution
**Reflex** is a delivery management system that brings order to the chaos by providing:
- **Retailers:** Simple order logging via WhatsApp
- **Dispatchers:** Web dashboard to assign deliveries to riders
- **Riders:** SMS-based status updates (Picked Up → Delivered)

## Architecture Overview
This project uses a **hybrid communication approach** designed for the Kenyan market:
- **WhatsApp Business API** - For retailer order submission (high adoption, familiar interface)
- **Web Dashboard** - For dispatchers to manage and assign deliveries
- **SMS Integration (Africa's Talking)** - For riders to receive assignments and update status
- **Backend:** Node.js serverless functions
- **Database:** Cloud-based real-time database (Supabase/Firebase)

## Project Documents

This repository contains the design and documentation for the Reflex case study:

- **[TRADE_OFF_LOG.md](./TRADE_OFF_LOG.md)** - Analysis of architectural trade-offs and design decisions
- **[DECK_STORYBOARD.md](./DECK_STORYBOARD.md)** - Executive presentation deck outline
- **[BLOCKER_JOURNAL.md](./BLOCKER_JOURNAL.md)** - Learning journey and troubleshooting log

##  Target Users
1. **Retailer Staff** - Log delivery requests with customer name, phone, address, and item description
2. **Dispatcher** - View open requests and assign them to available riders
3. **Rider (Boda Boda)** - Receive assignments via SMS and update delivery status

## Roadmap
- **Phase 1 (MVP):** WhatsApp integration, manual dispatch, SMS status updates
- **Phase 2:** Automated rider assignment, offline mobile app for riders
- **Phase 3:** USSD integration for retailers without smartphones, GPS tracking

## Case Study Context
This project was developed as part of the PLP Software Engineering Readiness Sprint, focusing on system design, trade-off analysis, and executive presentation skills.

-------------------------------------------------------------------------

**Built with ❤️ for Kenyan small businesses**
