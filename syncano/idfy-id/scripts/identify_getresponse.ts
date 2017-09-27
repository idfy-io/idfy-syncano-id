import { SyncanoHelper } from './../utils/SyncanoHelper';
const { response } = require('syncano-server');

const validation = {
    requestId: "required",
    //metaData: "boolean",
};

SyncanoHelper.signereJsonResponse(
    (c, a) => c.getResponse(a.requestId, a.metaData),
    validation
);