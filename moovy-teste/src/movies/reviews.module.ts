import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { reviewProvider } from 'src/providers/review.provider';
import { ReviewsController } from './reviews.controller';
import { ReviewsService } from './reviews.service';

@Module({
    imports: [
        DatabaseModule
    ],
    controllers: [ReviewsController],
    providers: [...reviewProvider, ReviewsService],
})

export class ReviewsModule {}