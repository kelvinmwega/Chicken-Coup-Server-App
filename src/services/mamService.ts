import { asciiToTrytes, trytesToAscii } from "@iota/converter";
import { IMAMConfig } from "../models/IMAMConfig";
import { composeAPI } from "@iota/core";
import { randomBytes } from "crypto";
import { createChannel, createMessage, mamAttach } from "@iota/mam.js";
import * as Mam from "@iota/mam";

export class MamService {

    private readonly _mamconfig: IMAMConfig;
    private _mamState: Mam.MamState;

    constructor(config: IMAMConfig) {
        this._mamconfig = config;
        // this._mamState = Mam.init(this._mamconfig.server, this._mamconfig.seed);
    }

    /**
     * Update the Mam channel with new data
     * @param asciiMessage The message to be saved on the mam channel
     */
    public async publishToMam(asciiMessage: object) {

        // const trytes = asciiToTrytes(JSON.stringify(asciiMessage));
        // const message = Mam.create(this._mamState, trytes);

        // this._mamState = message.state;
        // await Mam.attach(message.payload, message.address, this._mamconfig.depth, this._mamconfig.minWeightMagnitude, this._mamconfig.tag);
        
        // return Mam.getRoot(this._mamState);

        const trytes = asciiToTrytes(JSON.stringify(asciiMessage));
        const channelState = createChannel(this._mamconfig.seed, this._mamconfig.security, this._mamconfig.mode);

        const message = createMessage(channelState, trytes);

        const api = composeAPI({ provider: this._mamconfig.server });
        await mamAttach(api, message, this._mamconfig.depth, this._mamconfig.minWeightMagnitude, this._mamconfig.tag);

        return message.root;
    }

    public async generateSeed(length) {
        const charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ9';
        let seed = '';
        while (seed.length < length) {
            const byte = randomBytes(1)
            if (byte[0] < 243) {
                seed += charset.charAt(byte[0] % 27);
            }
        }
        return seed;
    }
}
