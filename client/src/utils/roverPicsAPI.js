import axios from 'axios';


const roverPicsSearch = async (query) =>

    axios.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&camera=fhaz&api_key=${apiKey}`);

export default { roverPicsSearch };
