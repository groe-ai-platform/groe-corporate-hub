const axios = require('axios');
require('dotenv').config();

async function getUberToken() {
    const params = new URLSearchParams();
    params.append('client_id', process.env.UBER_CLIENT_ID);
    params.append('client_secret', process.env.UBER_CLIENT_SECRET);
    params.append('grant_type', 'client_credentials');
    params.append('scope', 'delivery');

    try {
        const response = await axios.post('https://login.uber.com/oauth/v2/token', params);
        console.log("SUPERSTORK CONNECTED: Token Received ✅");
        return response.data.access_token;
    } catch (error) {
        console.error("CONNECTION FAILED ❌", error.response.data);
    }
}

getUberToken();
