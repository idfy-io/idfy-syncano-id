import { SyncanoHelper } from './../utils/SyncanoHelper';
const { response } = require('syncano-server');

const validation = {
    requestId: "required",
};

SyncanoHelper.signereJsonResponse(
    (c, a) => c.invalidateRequest(a.requestId),
    validation
);