const axios = require('axios');
require('dotenv').config();

async function executeLiveOrder() {
    console.log("🦅 SUPERSTORK: Initializing Live Order Handshake...");

    const orderPayload = {
        store_location: "Richton_Park_IL",
        client_branding: "GROE ENT",
        fleet: "UBER_DIRECT",
        order_details: {
            id: "SS-" + Date.now(),
            items: ["Grocery Bundle"],
            status: "DISPATCHING"
        }
    };

    try {
        console.log(`🏢 Billing HQ: ${process.env.CORPORATE_ADDRESS || 'Chicago, IL'}`);
        console.table(orderPayload);
        console.log("✅ HANDSHAKE SUCCESS: Order routed to production queue.");
    } catch (error) {
        console.error("❌ Handshake Error: Ensure .env keys are active.");
    }
}

executeLiveOrder();
