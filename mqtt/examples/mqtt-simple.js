import * as mqtt from '../helpers/mqtt-publisher.js'
import * as gardena from '../gardena.js'

// configure mtls for mqtt broker
let mqtt_options = {
    port   : process.env.MQTT_PORT,
    topic  : process.env.MQTT_PUBLISH_TOPIC,
    url    : process.env.MQTT_URL,
    secure : false
}

// configure gardena client: when receiving message on websocket publish to mqtt
let gardena_options = {
    username : process.env.GARDENA_USERNAME,
    password : process.env.GARDENA_PASSWORD,
    apikey   : process.env.GARDENA_APIKEY,
    log      : (data) => console.log(data),
    callback : mqtt.publish
}

// start the show
mqtt.connect(mqtt_options)
gardena.connect(gardena_options)