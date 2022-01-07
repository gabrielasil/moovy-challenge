import { Moovy } from "src/entity/moovy.entity";
import { Review } from "src/entity/review.entity";
import { createConnection } from "typeorm"

export const databaseProvider = [
    {
        provide: "DATABASE_CONNECTION",
        useFactory: async () =>
            await createConnection({
                type: 'postgres',
                host: 'kesavan.db.elephantsql.com',
                port: 5432,
                username: 'rahndoml',
                password: '3M9tmmW7CGSTiVhRBNIlhjg0g74nzc9o',
                database: 'rahndoml', //information from ElephantSQL
                entities: [Moovy, Review],
                synchronize: true,
            }),
    },
];