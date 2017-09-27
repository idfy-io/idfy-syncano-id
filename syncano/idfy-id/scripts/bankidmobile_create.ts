import { SyncanoHelper } from './../utils/SyncanoHelper';
const { response } = require('syncano-server');

const validation = {
    MobileNumber: "regex:[0-9]{8}",
    DateOfBirth: "regex:[0-9]{6}",
    //GetSocialSecurityNumber: "boolean",
    //ExternalReference: "string",
    //Addonservices : "",
};

SyncanoHelper.signereJsonResponse(
    (c, a) => c.createBankIdMobileIdentificationProcess(a),
    validation
);