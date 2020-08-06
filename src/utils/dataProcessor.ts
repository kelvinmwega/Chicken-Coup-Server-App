import { IPayload } from "../models/IPayload";

export class DataProcessor {

    public static async processEMDData(
    payload: string
    ): Promise<IPayload> {

        const values: string[] = payload.split(",");

        const processedPayload: IPayload = {
            datatype: values[0],
            deviceid: values[1],
            humidity: parseInt(values[2]),
            temperature: parseInt(values[3]),
            light: parseInt(values[4]),
            battery: parseInt(values[5]),
            errors: parseInt(values[6]),
            memory: parseInt(values[7]),
            count: parseInt(values[8]),
            signal: parseInt(values[9]),
            timestamp: new Date().toISOString()
        };

        return processedPayload;
    }

    public static async processWMDData(payload: string): Promise<any> {

        const values: string[] = payload.split(",");

        const processedPayload: any = {
            datatype: values[0],
            deviceid: values[1],
            height: parseInt(values[2]),
            battery: parseInt(values[3]),
            temperature: parseInt(values[4]),
            humidity: parseInt(values[5]),
            errors: parseInt(values[6]),
            count: parseInt(values[7]),
            signal: parseInt(values[8]),
            timestamp: new Date().toISOString()
        }

        return processedPayload;
    }

    public static async processEMDPMData(payload: string): Promise<any> {
        const values: string[] = payload.split(",");

        const processedPayload: any = {
            datatype: values[0],
            deviceid: values[1],
            humidity: parseInt(values[2]),
            temperature: parseInt(values[3]),
            light: parseInt(values[4]),
            door: parseInt(values[5]),
            power: parseInt(values[6]),
            doorcount: parseInt(values[7]),
            powercount: parseInt(values[8]),
            battery: parseInt(values[9]),
            errors: parseInt(values[10]),
            memory: parseInt(values[11]),
            count: parseInt(values[12]),
            signal: parseInt(values[13]),
            timestamp: new Date().toISOString()
        }

        return processedPayload;
    }

    public static async processTrackerData(payload: string): Promise<any> {
        const values: string[] = payload.split(",");

        const processedPayload: any = {
            datatype: values[0],
            deviceid: values[1],
            gpsStatus: values[2],
            speed: values[3],
            latitude: values[4],
            longitude: values[5],
            altitude: values[6],
            course: values[7],
            battery: values[8],
            count: values[9],
            errors: values[10],
            signal: values[11],
            timestamp: new Date().toISOString()
        }

        return processedPayload;
    }

    public static async processTrackerEMDData(payload: string): Promise<any> {
        const values: string[] = payload.split(",");

        const processedPayload: any = {
            datatype: values[0],
            deviceid: values[1],
            gpsStatus: values[2],
            speed: values[3],
            latitude: values[4],
            longitude: values[5],
            altitude: values[6],
            course: values[7],
            battery: values[8],
            power: values[9],
            door: values[10],
            humidity: values[11],
            temperature: values[12],
            light: values[13],
            count: values[14],
            errors: values[15],
            signal: values[16],
            timestamp: new Date().toISOString()
        }

        return processedPayload;
    }
}