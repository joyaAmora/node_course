const https = require('https')
const url = 'https://api.darksky.net/forecast/18981b1f9bc4d9e2838e9cf103bc29ba/' + lat + ',' + long

const request = https.request(url, (response) => {
    let data = ''
    response.on('data', (chunk) => {
        data =  data + chunk.toString()
        console.log(chunk)
    })
})

response.on('end', () => {
    const body = JSON.parse(data)
    console.log(body)
})

request.on('error', (error) => {
    console.log('an error', error)
})

request.end()