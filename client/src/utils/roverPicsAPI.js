import axios from 'axios';

const apiKey = "Zo8kqmCDwTNnP4Z5aMz5uyoVq6wR2BFGTT9tqNGe"
const roverPicsSearch = async (query) =>

    axios.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&camera=fhaz&api_key=${apiKey}`);

export default { roverPicsSearch };