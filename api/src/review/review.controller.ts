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
	async byProductId(@Param('productId') productId: string) {
		return this.reviewService.byProductId(productId)
	}

	@Get('getById/:id')
	async byId(@Param('id') reviewId: string) {
		return this.reviewService.byId(reviewId)
	}

	@UsePipes(new ValidationPipe())
	@Post()
	@Auth('USER')
	async create(@CurrentUser('id') userId: string, @Body() dto: ReviewDto) {
		return this.reviewService.create(userId, dto)
	}
}
