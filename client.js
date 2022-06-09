import * as mqtt from 'mqtt'
import * as gardena from 'gardena-api-client'
import fs from 'fs'

let client  = undefined
let config = {
    port:   process.env.MQTT_PORT,
    key:    fs.readFileSync(process.env.MQTT_SERVER_KEY),
    cert:   fs.readFileSync(process.env.MQTT_SERVER_CERT),
    ca:     fs.readFileSync(process.env.MQTT_CA_CERT),
    rejectUnauthorized: true
}

let publish = (data) => {
    client.publish(process.env.MQTT_TOPIC, data)
}

client = mqtt.connect(process.env.MQTT_URL, config)

gardena.connect({
    username: process.env.GARDENA_USERNAME,
    password: process.env.GARDENA_PASSWORD,
    apikey: process.env.GARDENA_APIKEY,
    log: (entry) => console.log(`${new Date().toLocaleString()} - ${entry}`),
    callback: publish
})


