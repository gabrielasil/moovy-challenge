import { Review } from 'src/entity/review.entity';
import { DeleteResult, InsertResult, Repository } from 'typeorm';
export declare class ReviewsService {
    private reviewsRepository;
    constructor(reviewsRepository: Repository<Review>);
    getReviews(): Promise<Review[]>;
    addReview(review: Review): Promise<InsertResult>;
    findOne(movieID: string): Promise<Review>;
    deleteReview(movieID: string): Promise<DeleteResult>;
}
