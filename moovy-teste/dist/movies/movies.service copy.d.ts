import { Moovy } from 'src/entity/moovy.entity';
import { DeleteResult, InsertResult, Repository } from 'typeorm';
export declare class MoviesService {
    private moviesRepository;
    constructor(moviesRepository: Repository<Moovy>);
    getMovies(): Promise<Moovy[]>;
    addMovie(movie: Moovy): Promise<InsertResult>;
    findOne(movieID: string): Promise<Moovy>;
    deleteMovie(movieID: string): Promise<DeleteResult>;
}
