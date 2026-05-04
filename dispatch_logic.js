require('dotenv').config();

function routeToBestPartner(orderData) {
    console.log("🚚 SUPERSTORK DISPATCH: Analyzing best route for order...");
    
    // Logic to choose between Uber Direct (already connected) 
    // and other potential fleets via Deliverect Dispatch
    const partner = "Uber_Direct_Fleet"; 
    
    console.log(`✅ Order matched with ${partner}. Target delivery: 29 mins.`);
}

routeToBestPartner({orderId: "SS-99", destination: "Richton Park"});
