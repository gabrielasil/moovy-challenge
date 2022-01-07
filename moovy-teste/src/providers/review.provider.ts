import { Provider } from "@nestjs/common";
import { Review } from "src/entity/review.entity"
import { Connection } from "typeorm";

export const reviewProvider: Provider[] = [
    {
        provide: 'REVIEW_REPOSITORY',
        useFactory: (connection: Connection) =>
            connection.getRepository(Review),
        inject: ['DATABASE_CONNECTION']
    },
];