import { Moovy } from "src/entity/moovy.entity";
import { MoviesService } from "./movies.service";
export declare class MoviesController {
    private moviesService;
    constructor(moviesService: MoviesService);
    getAllMovies(): Promise<Moovy[]>;
    create(movie: Moovy): Promise<void>;
    getOneMovie(movieID: string): Promise<Moovy>;
    deleteMovie(movieID: string): Promise<import("typeorm").DeleteResult>;
}
