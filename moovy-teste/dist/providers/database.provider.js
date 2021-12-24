"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.databaseProvider = void 0;
const moovy_entity_1 = require("../entity/moovy.entity");
const typeorm_1 = require("typeorm");
exports.databaseProvider = [
    {
        provide: "DATABASE_CONNECTION",
        useFactory: async () => await (0, typeorm_1.createConnection)({
            type: 'postgres',
            host: 'kesavan.db.elephantsql.com',
            port: 5432,
            username: 'rahndoml',
            password: 'IQMYKRRnPxSyogDtLTKAdUTZ2M9WWY_W',
            database: 'rahndoml',
            entities: [moovy_entity_1.Moovy],
            synchronize: true,
        }),
    },
];
//# sourceMappingURL=database.provider.js.map