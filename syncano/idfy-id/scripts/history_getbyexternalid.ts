import { SyncanoHelper } from './../utils/SyncanoHelper';
const { response } = require('syncano-server');

const validation = {
    externalId: "required",
};

SyncanoHelper.signereJsonResponse(
    (c, a) => c.getHistoricRequestByExternalId(a.externalId),
    validation
);