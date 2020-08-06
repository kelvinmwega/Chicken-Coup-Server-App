import { IMqttConfig } from "./IMqttConfig";
import { IMAMConfig } from "./IMAMConfig";

export interface IConfig {
    mqttConfig: IMqttConfig;
    mamConfig: IMAMConfig;
}