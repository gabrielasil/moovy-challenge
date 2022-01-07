import { Entity, PrimaryGeneratedColumn, Column, PrimaryColumn} from "typeorm";

@Entity()

export class Review {
    @PrimaryColumn()
    movieID: string;

    @Column()
    movieReview: string;

}