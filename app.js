
const geocode  = require('./utils/geocode');
const forecast = require('./utils/forecast');
// const url = 'http://api.weatherstack.com/current?access_key=55240620565673beff3a3541b9b2f204&query=76.79111,30.73528&units=m';

// request({url: url, json: true }, (error, response)=> {
//     if(error) {
//         console.log(`Unable to connect to weather service!`)
//     } else if(response.body.error) {
//             console.log("Unabel to find the location.")
//     }else {
//         console.log(`${response.body.current.weather_descriptions[0]}. It is ${response.body.current.temperature} temprature  and it feels like ${response.body.current.feelslike}`);
//     }
// })

// let geocodeUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/chandigarh.json?access_token=pk.eyJ1IjoiYW1hbmtodXJhbmF0ZWNocyIsImEiOiJja3YyN2VxNnYwNjA2Mm5vMHNkY2Y2OXVtIn0.NgPwFjzoNZ1k_8lQkDBLPg&limit=1`;

// request({url: geocodeUrl, json: true }, (error, response) => {
//     if(error) {
//         console.log(`Unable to connect to weather service!`)
//     } else if(response.body.features.length === 0) {
//         console.log('Unable to find the location')
//     } else  {
//         const longitude = response.body.features[0].center[0];
//         const latitude = response.body.features[0].center[1];
//         console.log(longitude,latitude )
//     }
// })  

let locaiton =  process.argv[2];

geocode(locaiton, (error, { longitude, latitude, location } = {})=> {
    if(error) {
        return  console.log(error)
    }    
// forecast(data.longitude, data.latitude, (error, forecastData) => {
    forecast(longitude,latitude, (error, forecastData) => {
        if(error) {
            return  console.log(error)
        }
            console.log(location)
            console.log(forecastData);
        })
})