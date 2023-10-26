import {
	Body,
	Controller,
	Get,
	Param,
	Post,
	UsePipes,
	ValidationPipe,
} from '@nestjs/common'
import { ReviewService } from './review.service'
import { ReviewDto } from './review.dto'

@Controller('reviews')
export class ReviewController {
	constructor(private readonly reviewService: ReviewService) {}

	@Get(':productId')
	async getReviewsByProductId(@Param('productId') productId: string) {
		return this.reviewService.getReviewsByProductId(productId)
	}

	@Get('getById/:reviewId')
	async getReviewById(@Param('reviewId') reviewId: number) {
		return this.reviewService.getReviewById(reviewId)
	}

	@Post()
	@UsePipes(new ValidationPipe())
	async createReview(@Body() dto: ReviewDto) {
		return this.reviewService.createReview(dto)
	}

	@Get('avg/:productId')
	async getAvgByProductId(@Param('productId') productId: string) {
		return this.reviewService.getAvgByProductId(productId)
	}
}
