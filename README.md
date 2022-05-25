# gardena2mqtt-docker
Connects to Gardena's websocket and listens for status messages of your smart garden system. Once a status message
was received it will be published on an mqtt broker of your choice. In case of connection loss all components 
will auto recover.
## Usage
- clone repository and change into the folder
- prepare environment file by copying the template: ```cp docker/environment.env.example docker/environment.env```
- change all settings in the ```environment.env```
   
    > :exclamation: Be aware of the paths to the certificates! These path settings have to match the configuration in the 
```docker-compose.yml```.
- adapt the volume for certificates in ```docker-compose.yml```
- run with ```docker-compose up``` or ```docker-compose up -d && docker logs -f gardena``` the first time to see log 
output and check if everything is working