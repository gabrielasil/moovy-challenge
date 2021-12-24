import { Body, Controller, Delete, Get, Param, Post } from "@nestjs/common";
import { Moovy } from "src/entity/moovy.entity";
import { MoviesService } from "./movies.service";

@Controller()
export class MoviesController {
    constructor(private moviesService: MoviesService) {}

    @Get()
    getAllMovies(): Promise<Moovy[]> {
        return this.moviesService.getMovies();
    }

    @Post()
    async create(@Body() movie: Moovy) {
        await this.moviesService.addMovie(movie);
    }

    @Get(':movieID')
    getOneMovie(@Param('movieID') movieID: string): Promise<Moovy> {
        return this.moviesService.findOne(String(movieID));
    }

    @Delete(':movieID')
    deleteMovie(@Param('movieID') movieID: string) {
        return this.moviesService.deleteMovie(String(movieID));
    }

}