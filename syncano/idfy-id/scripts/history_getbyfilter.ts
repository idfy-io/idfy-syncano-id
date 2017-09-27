import { SyncanoHelper } from './../utils/SyncanoHelper';
const { response } = require('syncano-server');

const validation = {
    year: "required|number",
    //month: "number",
    //day: "number",
    //status: "in:UNKOWN,SUCCESS,ERROR,USERABORTED,INVALIDATED,TIMEOUT",
    //identityProviderType: SyncanoHelper.validationRules.identityProvider,
    //name: "string",
    //skip: "number",
    //pageSize: "number",
};

SyncanoHelper.signereJsonResponse(
    (c, a) => c.getHistoricRequestByExternalId(a.externalId),
    validation
);