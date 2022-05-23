import * as gardena from '../gardena.js'

// configure gardena client: when receiving message on websocket publish to mqtt
let gardena_options = {
    username : process.env.GARDENA_USERNAME,
    password : process.env.GARDENA_PASSWORD,
    apikey   : process.env.GARDENA_APIKEY,
    callback : (data) => console.log('CALLBACK: ' + data),
    log      : (data) => console.log('LOG: ' + data)
}

// start the show
gardena.connect(gardena_options)