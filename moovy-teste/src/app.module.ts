import { Module } from '@nestjs/common';
import { RouterModule } from '@nestjs/core';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MoviesModule } from './movies/movies.module';
import { ProductsModule } from './products/product.module';

@Module({
  imports: [ProductsModule, MoviesModule, 
    RouterModule.register([{
      path: 'api/moovy',
      module: MoviesModule,
    },
  ]),
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
