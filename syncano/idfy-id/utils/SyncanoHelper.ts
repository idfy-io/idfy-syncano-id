import { IdentificationClient } from '@idfy/identification';
const { validate } = require("syncano-validate");
const { response } = require('syncano-server');
const util = require('util');

declare var ARGS: any;
declare var CONFIG: any;

export class SyncanoHelper {

    static args : any = ARGS;
    static config: any = CONFIG;

    static signereAction<T>(fn: (client: IdentificationClient, args: any) => Promise<T>): Promise<T> {
        return fn(this.getIdentificationClient(), ARGS);
    }

    static signereJsonResponse<T>(fn: (client: IdentificationClient, args: any) => Promise<T>, validationRules: any) {
        const promise = validationRules ? validate(ARGS, validationRules) : Promise.resolve();
        return promise.then(() => fn(this.getIdentificationClient(), ARGS)
            .then(r =>
                response.json(r))
        ).catch((err: any) =>
            response.json({ error: util.inspect(err) }));
    }

    static signereResponse<T>(fn: (client: IdentificationClient, args: any) => Promise<T>, validationRules: any) : Promise<T> {
        const promise = validationRules ? validate(ARGS, validationRules) : Promise.resolve();
        return promise.then(() => fn(this.getIdentificationClient(), ARGS)
            .then(r => r
            ).catch((err: any) =>
                response.json({ error: util.inspect(err) })));
    }

    static validationRules = {
        required_language: "required|in:NO,EN,SV,FI,DA",
        language: "in:NO,EN,SV,FI,DA",
        required_identityProvider: "required|in:UNKNOWN,NO_BANKID_MOBILE,NO_BANKID_WEB,SWE_BANKID,SWE_BANKID_MOBILE,NO_BUYPASS,NO_BUYPASS,DA_NEMID,FI_TUPAS",
        identityProvider: "in:UNKNOWN,NO_BANKID_MOBILE,NO_BANKID_WEB,SWE_BANKID,SWE_BANKID_MOBILE,NO_BUYPASS,NO_BUYPASS,DA_NEMID,FI_TUPAS"
    };

    static getIdentificationClient(): IdentificationClient {
        return new IdentificationClient(
            CONFIG.AccountId,
            CONFIG.ClientId,
            CONFIG.ClientSecret,
            CONFIG.Scope,
            CONFIG.Test
        );
    }

}