# gardena2mqtt-docker
Connects to Gardena's websocket and listens for status messages of your smart garden system. Once a status message
was received it will be published on an mqtt broker of your choice. In case of connection loss all components 
will auto recover.
## Usage
- clone repository and change into the folder
- prepare environment file by copying the template: ```cp docker/environment.env.exampe docker/environment.env```
- change all settings in the ```environment.env``` 
- :exclamation: Test