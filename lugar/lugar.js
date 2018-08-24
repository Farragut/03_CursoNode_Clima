const axios = require('axios');

const getLugarLatLng = async(direccion) => {
    let encodedAddress_URL = encodeURI(direccion);
    let API_KEY = "AIzaSyA-HXVa2jtkGfKtIJwisxgC46RaWqC1xuI";

    let result = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress_URL}&key=${API_KEY}`)

    if (result.data.status === 'ZERO_REULTS') {
        throw new Error(`No hay resultados para ${direccion}`);
    }

    let location = result.data.results[0];
    let coords = location.geometry.location;

    return {
        direccion: location.formatted_address,
        lat: coords.lat,
        lng: coords.lng
    }
}

module.exports = {
    getLugarLatLng
}