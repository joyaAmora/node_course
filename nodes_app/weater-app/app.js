const request = require('request')

// const url = 'https://api.darksky.net/forecast/18981b1f9bc4d9e2838e9cf103bc29ba/37.8267,-122.4233?units=si&lang=fr'

// request({ url: url, json: true }, (error, response) =>{
//     if(error)
//         console.log('Unable to connect to weather service!')
//     else if(response.body.error)
//     {
//         console.log('Unable to find location')
//     }
//     else
//     {
//         console.log(response.body.daily.data[0].summary + ' It is currently ' + response.body.currently.temperature + ' degrees and there is ' + 
//         response.body.currently.precipProbability + ' % of rain')
//     }
    
// }) 

const url1 = 'https://api.mapbox.com/geocoding/v5/mapbox.places/shawinigan.json?access_token=pk.eyJ1Ijoiam95YWFtb3JhIiwiYSI6ImNrNnBwdGw5YzFtc2MzbG83MWZubGc0bnIifQ.SuQ2LhaLcLiA7k78f4tP2Q'

request({ url: url1, json: true }, (error, response) => {
    if(error)
        console.log('Unable to connect to weather service!')
    else if (response.body.features.length === 0)
        console.log('Unable to find location')
    else
    {
        const latitude = response.body.features[0].center[1]
        const longitude = response.body.features[0].center[0]
        console.log(latitude, longitude)
    }

})