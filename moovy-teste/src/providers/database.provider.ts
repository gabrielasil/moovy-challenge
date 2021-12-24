import { Moovy } from "src/entity/moovy.entity";
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
                password: 'IQMYKRRnPxSyogDtLTKAdUTZ2M9WWY_W',
                database: 'rahndoml', //information from ElephantSQL
                entities: [Moovy],
                synchronize: true,
            }),
    },
];