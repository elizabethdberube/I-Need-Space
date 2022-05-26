const { API_KEY } = require('dotenv');
const axios = require('axios');

module.exports = {
    dailyPic: async () => {
        return await axios.get(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`).then((res) => res.json());
    },


};