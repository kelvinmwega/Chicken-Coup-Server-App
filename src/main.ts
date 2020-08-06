import { MqttService } from "./services/mqttService";

import { IConfig } from "./models/IConfig";
import logger = require("./utils/logger");
import { MamService } from "./services/mamService";

(async () => {

  try {

    const config: IConfig = require(`./data/config.local.json`);
    const mqttservice = new MqttService(config);
    await mqttservice.connect();
    await mqttservice.subscribe();
  // mqttservice.publish("from main");
    // const ms = new MamService(config.mamConfig);
    // console.log(ms.generateSeed(81));
    
  } catch (error) {
    logger.error(`Connection Failed : ${error}`);
  }
})();

// Hot Module Replacement
if (module.hot) {
  module.hot.accept();
  module.hot.dispose(() => console.log("Module disposed. "));
}
