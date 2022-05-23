import * as mqtt from 'mqtt'
let mqtt_client
let topic = undefined
let connect = (options) => {
    let config
    topic = options.topic
    if(options.secure === true) {
        config = {
            port: options.port,
            key: options.key ,
            cert: options.cert,
            ca: options.ca,
            rejectUnauthorized: true
        }
    } else {
        config = {
            port: options.port,
            rejectUnauthorized: false
        }
    }
    mqtt_client = mqtt.connect(options.url, config)
}
let publish = (data) => {
    mqtt_client.publish(topic, data)
}

export { connect, publish }