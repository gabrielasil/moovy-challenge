import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { Review } from 'src/entity/review.entity';
import { DeleteResult, InsertResult, Repository } from 'typeorm';

@Injectable()
export class ReviewsService {
    constructor(
        @Inject('REVIEW_REPOSITORY') 
        private reviewsRepository: Repository<Review>,
    ) {}

    async getReviews(): Promise<Review[]>{
        return this.reviewsRepository.find();
    }

    async addReview(review: Review): Promise<InsertResult> {
        return this.reviewsRepository.insert(review);
    }

    async findOne(movieID: string): Promise<Review>{
        return this.reviewsRepository.findOne(movieID);
    }

    async deleteReview(movieID: string): Promise<DeleteResult> {
        const reviewToDelete = await this.findOne(movieID);
        if (!reviewToDelete) {
            throw new NotFoundException();
        }
        return this.reviewsRepository.delete(movieID);
    }
}