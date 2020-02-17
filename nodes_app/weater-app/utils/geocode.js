const request = require('request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1Ijoiam95YWFtb3JhIiwiYSI6ImNrNnBwdGw5YzFtc2MzbG83MWZubGc0bnIifQ.SuQ2LhaLcLiA7k78f4tP2Q'

    request({url: url, json: true}, (error, response) => {
        if(error)
            callback('Unable to connect to location service', undefined)
        else if(response.body.features.length === 0){
            callback('Unable to fin location try another location', undefined)
        }
        else
            callback(undefined, {
                latitude : response.body.features[0].center[1],
                longitude : response.body.features[0].center[0],
                location: response.body.features[0].place_name
            })
    })
    
}

module.exports = geocode