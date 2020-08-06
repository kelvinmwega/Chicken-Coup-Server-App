import { IMAMConfig } from "../models/IMAMConfig";
import { INodeRedConfig } from "../models/INodeRedConfig";
import { IDataServer } from "../models/IDataServer";
import { MamService } from "./mamService";
import { DataProcessor } from "../utils/dataProcessor";
import axios from "axios";
import { IConfig } from "../models/IConfig";
import logger from "../utils/logger";

export class DataHandlerService {

    private readonly _noderedconfig: INodeRedConfig;
    private readonly _dataserver: IDataServer;
    private readonly _mamconfig: IMAMConfig;
    private readonly _mamService: MamService;

    constructor(config: IConfig) {
        this._mamconfig = config["iotamam"];
        this._noderedconfig = config["nodered"];
        this._dataserver = config["dataserver"];
        this._mamService = new MamService(this._mamconfig);
    }

    public async handleMQTTRxDate(topic: any, message: any): Promise<void> {

        const devicetype = topic.toString().split("/");

        let dataToPublish;
        let root;

        try {

            switch (devicetype[2]) {
                case "emd":
                    dataToPublish = await DataProcessor.processEMDData(
                        message.toString()
                    );

                    if (dataToPublish.deviceid === "868259027597320") {
                        root = await this._mamService.publishToMam(dataToPublish);
                        dataToPublish.root = root;
                        // this.postData(this._dataserver.emdhost, dataToPublish);
                        this.postData(this._noderedconfig.url, dataToPublish);
                    }
                    break;

                default:
                    break;
            }

        } catch (error) {
            logger.error(`Error : ${error}`);
        }
    }

    private async postData(url: string, data: any): Promise<void> {

        await axios.post(url, data).then((response) => {
            logger.info(`Response : ${response.status}`);
        }).catch((error) => {
            logger.error(`Failed : ${error}`);
        });
    }
}
