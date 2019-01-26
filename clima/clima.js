const axios = require('axios');

const getClima = async(lat, lng) => {
    let respuesta = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&units=metric&appid=00c7d4859085957630e01c4b8557ea15`);

    return {
        temp: respuesta.data.main.temp
    }
}


module.exports = {
    getClima
}