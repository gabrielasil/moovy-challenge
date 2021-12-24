import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { Moovy } from 'src/entity/moovy.entity';
import { DeleteResult, InsertResult, Repository } from 'typeorm';

@Injectable()
export class MoviesService {
    constructor(
        @Inject('MOOVY_REPOSITORY') 
        private moviesRepository: Repository<Moovy>,
    ) {}

    async getMovies(): Promise<Moovy[]>{
        return this.moviesRepository.find();
    }

    async addMovie(movie: Moovy): Promise<InsertResult> {
        return this.moviesRepository.insert(movie);
    }

    async findOne(movieID: string): Promise<Moovy>{
        return this.moviesRepository.findOne(movieID);
    }

    async deleteMovie(movieID: string): Promise<DeleteResult> {
        const movieToDelete = await this.findOne(movieID);
        if (!movieToDelete) {
            throw new NotFoundException();
        }
        return this.moviesRepository.delete(movieID);
    }
}