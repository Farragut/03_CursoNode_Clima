//usamos open weather map y google para las APIs

const lugar = require('./lugar/lugar');
const clima = require('./clima/clima')

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

let getInfo = async(direccion) => {
    try {
        let coords = await lugar.getLugarLatLng(direccion);
        console.log(coords);
        let temp = await clima.getClima(coords.lat, coords.lng);

        return `La temperatura en ${coords.direccion} es de ${temp}ºC`;
    } catch (error) {
        return `No se pudo determinar el clima en ${direccion}`;
    }
}

getInfo(argv.direccion)
    .then(mensaje => console.log(mensaje))
    .catch(e => console.log(e))

// lugar.getLugarLatLng(argv.direccion)
//     .then(resp => {
//         console.log(resp);
//     })
//     .catch(e => console.log(e));

// clima.getClima(-0.3069491, -78.5018999)
//     .then(temp => {
//         console.log(`${temp} ºC`);
//     })
//     .catch(e => console.log(e));