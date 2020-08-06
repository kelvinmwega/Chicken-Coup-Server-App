# Chicken-Coup-Server-App

### Live data can be accessed on this [demo application](https://mis6060project.eu-gb.mybluemix.net/ui)

#### The Server Application has the following functionalities.
1. Subscribes to Environment Monitoring Device Data MQTT Server.
2. Process received data.
3. Post data to the IOTA tangle Distributed Ledger.
4. Saves data to Cloudant Distributed Database.
5. Post data to remote node-red dashboard.

###### Inspect the IOTA tangle MAM message using the root [here](https://mam-explorer.firebaseapp.com/)

###### To Run this Application. 

Modify the /src/data/config.local.json file.

```
docker-compose up --build
```