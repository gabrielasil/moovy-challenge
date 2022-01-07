import { Body, Controller, Delete, Get, Param, Post } from "@nestjs/common";
import { Review } from "src/entity/review.entity";
import { ReviewsService } from "./reviews.service";

@Controller()
export class ReviewsController {
    constructor(private reviewsService: ReviewsService) {}

    @Get()
    getAllReviews(): Promise<Review[]> {
        return this.reviewsService.getReviews();
    }

    @Post()
    async create(@Body() movie: Review) {
        await this.reviewsService.addReview(movie);
    }

    @Get(':movieID')
    getOneReview(@Param('movieID') movieID: string): Promise<Review> {
        return this.reviewsService.findOne(String(movieID));
    }

    @Delete(':movieID')
    deleteReview(@Param('movieID') movieID: string) {
        return this.reviewsService.deleteReview(String(movieID));
    }

}