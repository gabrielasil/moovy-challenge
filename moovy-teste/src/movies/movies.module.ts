import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { moovyProvider } from 'src/providers/moovy.provider';
import { MoviesController } from './movies.controller';
import { MoviesService } from './movies.service';

@Module({
    imports: [
        DatabaseModule
    ],
    controllers: [MoviesController],
    providers: [...moovyProvider, MoviesService],
})

export class MoviesModule {}