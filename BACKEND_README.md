# Reflex Delivery System

A full-stack, real-time delivery dispatch application that integrates WhatsApp, a cloud database, and a live dispatcher dashboard.

## Features
- **WhatsApp Ordering:** Retailers can send orders via WhatsApp, which are automatically parsed and saved to the database.
- **Dispatcher Dashboard:** A live web dashboard showing real-time order statistics, pending orders, and assignment capabilities.
- **Rider Mobile App:** A mobile-optimized interface for riders to update order statuses (Picked Up, Delivered).
- **Real-time Sync:** Changes made by riders instantly reflect on the dispatcher dashboard.

## Tech Stack
- **Frontend:** HTML5, CSS3, Vanilla JavaScript, Vercel (Static Hosting)
- **Backend:** Node.js (Vercel Serverless Functions)
- **Database:** PostgreSQL (Supabase)
- **APIs:** Meta WhatsApp Cloud API

## How It Works
1. A retailer sends a WhatsApp message to the business number.
2. Meta's Webhook sends a POST request to the Vercel serverless function.
3. The function parses the message and inserts a new row into the Supabase `orders` table.
4. The Dispatcher Dashboard fetches the new order and displays it with a "WHATSAPP" badge.
5. The dispatcher assigns a rider, who then updates the status via the mobile rider page.

## ️ Setup
- **Frontend:** Hosted locally via Python HTTP Server (or can be deployed to Vercel).
- **Backend:** Deployed on Vercel using Environment Variables for Supabase credentials.
- **Database:** Hosted on Supabase with Row Level Security (RLS) configured.

##  Deployment

### Live Links
- **Frontend (Dashboard):** https://reflex-delivery-system-sage.vercel.app/
- **Backend API:** https://reflex-delivery-system-sage.vercel.app/api/whatsapp *(Note: Visiting this URL directly returns "Verification failed" as expected, since it requires specific GET query parameters or a valid POST request from Meta with the correct verify token).*
- **Rider Page:** https://reflex-delivery-system-sage.vercel.app/rider.html?id=1


##  Screenshots
- [Dispatcher Dashboard] <img width="1440" height="900" alt=" Dispatcher Dashboard (Main View 01)" src="https://github.com/user-attachments/assets/ca1d512c-c304-49f9-b5a2-380782d166f2" />
<img width="1440" height="900" alt=" Dispatcher Dashboard (Main View 02)" src="https://github.com/user-attachments/assets/f9967b3f-4f44-4f48-8f14-1cdad8e0724a" />

- [Rider Mobile View] <img width="398" height="695" alt="Rider Mobile View" src="https://github.com/user-attachments/assets/a185fa46-292a-4c66-ba36-8b394075db47" />

- [Supabase Database] <img width="1440" height="900" alt="Supabase Database" src="https://github.com/user-attachments/assets/eea79477-b680-4557-b089-1bdb49a445f2" />

- [WhatsApp Integration] <img width="1242" height="2208" alt="WhatsApp Integration" src="https://github.com/user-attachments/assets/826c7d8b-4e30-469c-ae8c-88b7e963dea2" />

- [Vercel Deployment] <img width="1440" height="900" alt="Vercel Deployment Final" src="https://github.com/user-attachments/assets/04d8c17e-1151-490f-864b-6f83a4d4c866" />
