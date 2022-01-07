"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.moovyProvider = void 0;
const moovy_entity_1 = require("../entity/moovy.entity");
exports.moovyProvider = [
    {
        provide: 'MOOVY_REPOSITORY',
        useFactory: (connection) => connection.getRepository(moovy_entity_1.Moovy),
        inject: ['DATABASE_CONNECTION']
    },
];
//# sourceMappingURL=moovy.provider%20copy.js.map