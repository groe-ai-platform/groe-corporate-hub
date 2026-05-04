const axios = require('axios');
require('dotenv').config();

async function getRestaurantData(locationId) {
    console.log(`🔍 SUPERSTORK: Fetching data for Location: ${locationId}...`);
    
    try {
        const response = await axios.get(`https://restaurantapi-qa.spoton.com/posexport/v1/locations/${locationId}`, {
            headers: {
                'x-api-key': process.env.RESELLER_API_KEY // This pulls from your .env
            }
        });
        
        console.log("✅ CONNECTION SUCCESSFUL");
        console.log(`📍 Connected to: ${response.data.name}`);
        return response.data;
    } catch (error) {
        console.error("❌ CONNECTION FAILED: Check your API Key or Location ID.");
    }
}

// Replace with the ID you find in your dashboard
getRestaurantData('YOUR_LOCATION_ID_HERE'); 
