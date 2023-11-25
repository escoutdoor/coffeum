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
import { CurrentUser } from 'src/auth/decorators/user.decorator'
import { Auth } from 'src/auth/decorators/auth.decorator'

@Controller('reviews')
export class ReviewController {
	constructor(private readonly reviewService: ReviewService) {}

	@Get(':productId')
	async getReviewsByProductId(@Param('productId') productId: string) {
		return this.reviewService.getReviewsByProductId(productId)
	}

	@Get('getById/:id')
	async getReviewById(@Param('id') reviewId: string) {
		return this.reviewService.getReviewById(reviewId)
	}

	@UsePipes(new ValidationPipe())
	@Auth()
	@Post()
	async createReview(
		@CurrentUser('id') userId: string,
		@Body() dto: ReviewDto
	) {
		return this.reviewService.createReview(userId, dto)
	}

	@Get('avg/:productId')
	async getAvgByProductId(@Param('productId') productId: string) {
		return this.reviewService.getAvgByProductId(productId)
	}
}
