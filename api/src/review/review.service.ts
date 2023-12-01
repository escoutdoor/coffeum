import { Injectable, NotFoundException } from '@nestjs/common'
import { PrismaService } from 'src/prisma.service'
import { ReviewDto } from './review.dto'
import { reviewFields } from './review.object'

@Injectable()
export class ReviewService {
	constructor(private prisma: PrismaService) {}

	async byId(reviewId: string) {
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

	async byProductId(productId: string) {
		return this.prisma.review.findMany({
			where: {
				productId,
			},
			select: reviewFields,
		})
	}

	create(userId: string, dto: ReviewDto) {
		return this.prisma.review.create({
			data: {
				...dto,
				authorId: userId,
			},
			select: reviewFields,
		})
	}
}
