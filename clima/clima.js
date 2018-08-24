const axios = require('axios');
const API_KEY_OWM = '8ebc0a6dfe6398681b13296f847401f0';

const getClima = async(lat, lng) => {
    let resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=${API_KEY_OWM}`);
    return resp.data.main.temp;
}

module.exports = {
    getClima
}