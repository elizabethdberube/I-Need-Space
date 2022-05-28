require('dotenv').config();
const API_KEY = process.env.API_KEY;

const axios = require('axios');

// API calls for Rover pictures
module.exports = {
    roverFHAZ: async () => {
        return await axios.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&camera=FHAZ&api_key=${API_KEY}`).then((res) => res.data);
    },
    roverRHAZ: async () => {
        return await axios.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&camera=RHAZ&api_key=${API_KEY}`).then((res) => res.data);
    },
    roverNAVCAM: async () => {
        return await axios.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&camera=NAVCAM&api_key=${API_KEY}`).then((res) => res.data);
    },

};
// const search = async () =>

//     axios.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&camera=FHAZ&api_key=${API_KEY}`, {

//     })
//         .then(function (response) {



//         })
//         .catch(function (err) {
//             console.log(err);
//             res.status(400).json(err);

//         })
// const { data } = response;
// const { photos } = data;

// const { img_src, rover, camera } = photos[0];
// const { full_name } = camera;
// const { name, status, landing_date, launch_date } = rover;

// export default { search };