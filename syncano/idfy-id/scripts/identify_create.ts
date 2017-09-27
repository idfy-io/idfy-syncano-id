import { SyncanoHelper } from './../utils/SyncanoHelper';
const { response } = require('syncano-server');

const validation = {
    //IdentityProvider: SyncanoHelper.validationRules.identityProvider,
    ReturnUrls: "required",
    //iFrame : "",
    //Language: SyncanoHelper.validationRules.language,
    //GetSocialSecurityNumber: "boolean",
    //PreFilledSocialSecurityNumber: "string",
    //PageTitle: "string",
    //ExternalReference: "string",
    //Addonservices : "",
};

SyncanoHelper.signereJsonResponse(
    (c, a) => c.createIdentificationRequest(a),
    validation
);