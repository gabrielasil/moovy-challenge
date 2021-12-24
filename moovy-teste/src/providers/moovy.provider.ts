import { Provider } from "@nestjs/common";
import { Moovy } from "src/entity/moovy.entity";
import { Connection } from "typeorm";

export const moovyProvider: Provider[] = [
    {
        provide: 'MOOVY_REPOSITORY',
        useFactory: (connection: Connection) =>
            connection.getRepository(Moovy),
        inject: ['DATABASE_CONNECTION']
    },
];