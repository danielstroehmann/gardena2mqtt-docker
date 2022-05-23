import * as mqtt from '../helpers/mqtt-publisher.js'
import * as gardena from '../gardena.js'
import fs from 'fs'

// configure mtls for mqtt broker
let mqtt_options = {
    key    : fs.readFileSync(process.env.TLS_SERVER_KEY),
    cert   : fs.readFileSync(process.env.TLS_SERVER_CERT),
    ca     : fs.readFileSync(process.env.TLS_CA_CERT),
    port   : process.env.MQTT_PORT,
    topic  : process.env.MQTT_PUBLISH_TOPIC,
    url    : process.env.MQTT_URL,
    secure : (process.env.MQTT_SECURE == 'true')
}

// configure Gardena client: when receiving message on websocket publish to mqtt
let gardena_options = {
    username : process.env.GARDENA_USERNAME,
    password : process.env.GARDENA_PASSWORD,
    apikey   : process.env.GARDENA_APIKEY,
    callback : mqtt.publish,
    log      : (data) => console.log(data)
}

// start the show
mqtt.connect(mqtt_options)
gardena.connect(gardena_options)