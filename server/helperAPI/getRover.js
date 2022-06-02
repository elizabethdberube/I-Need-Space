require('dotenv').config();
const API_KEY = process.env.API_KEY;

const axios = require('axios');

// API calls for Rover pictures
module.exports = {
    roverFHAZ: async () => {
        return await axios.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&camera=FHAZ&api_key=${API_KEY}`)
    },
    roverRHAZ: async () => {
        return await axios.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&camera=RHAZ&api_key=${API_KEY}`)
    },
    roverNAVCAM: async () => {
        return await axios.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&camera=NAVCAM&api_key=${API_KEY}`)

    }
}