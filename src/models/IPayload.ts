export interface IPayload {
    datatype: string;
    deviceid: string;
    humidity: number;
    temperature: number;
    light: number;
    battery: number;
    errors: number;
    memory: number;
    count: number;
    signal: number;
    timestamp: string;
    root?: string;
}