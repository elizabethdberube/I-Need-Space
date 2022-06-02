require('dotenv').config();
const API_KEY = process.env.API_KEY;
const axios = require('axios');

// API call for picture of the day
module.exports = {
    dailyPic: async () => {
        return await axios.get(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`)
    },


};