"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reviewProvider = void 0;
const review_entity_1 = require("../entity/review.entity");
exports.reviewProvider = [
    {
        provide: 'REVIEW_REPOSITORY',
        useFactory: (connection) => connection.getRepository(review_entity_1.Review),
        inject: ['DATABASE_CONNECTION']
    },
];
//# sourceMappingURL=review.provider.js.map