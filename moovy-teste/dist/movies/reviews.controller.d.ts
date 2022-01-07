import { Review } from "src/entity/review.entity";
import { ReviewsService } from "./reviews.service";
export declare class ReviewsController {
    private reviewsService;
    constructor(reviewsService: ReviewsService);
    getAllReviews(): Promise<Review[]>;
    create(movie: Review): Promise<void>;
    getOneReview(movieID: string): Promise<Review>;
    deleteReview(movieID: string): Promise<import("typeorm").DeleteResult>;
}
