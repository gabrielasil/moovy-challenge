import { Entity, PrimaryGeneratedColumn, Column, PrimaryColumn} from "typeorm";

@Entity()

export class Moovy {
    @PrimaryColumn()
    movieID: string;

    @Column()
    isReview: boolean;

}
   