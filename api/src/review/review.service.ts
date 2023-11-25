import { Injectable, NotFoundException } from '@nestjs/common'
import { PrismaService } from 'src/prisma.service'
import { ReviewDto } from './review.dto'
import { reviewFields } from './review.object'

@Injectable()
export class ReviewService {
	constructor(private prisma: PrismaService) {}

	async getReviewById(reviewId: string) {
		const review = await this.prisma.review.findUnique({
			where: {
				id: reviewId,
			},
		})

		if (!review) {
			throw new NotFoundException('Review not found')
		}

		return review
	}

	getReviewsByProductId(productId: string) {
		return this.prisma.review.findMany({
			where: {
				productId,
			},
			select: reviewFields,
		})
	}

	async getAvgByProductId(productId: string) {
		const rating = await this.prisma.review.aggregate({
			where: { productId },
			_avg: {
				rating: true,
			},
		})

		return rating._avg.rating
	}

	createReview(userId: string, dto: ReviewDto) {
		return this.prisma.review.create({
			data: {
				...dto,
				authorId: userId,
			},
			select: reviewFields,
		})
	}
}
