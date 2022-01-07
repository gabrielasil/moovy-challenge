import { Module } from '@nestjs/common';
import { RouterModule } from '@nestjs/core';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MoviesModule } from './movies/movies.module';
import { ReviewsModule } from './movies/reviews.module';

@Module({
  imports: [MoviesModule, ReviewsModule, 
    RouterModule.register([{
      path: 'api/moovy',
      module: MoviesModule
    },
    {
      path: 'api/reviews',
      module: ReviewsModule
    }
  ]),
],
  
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
