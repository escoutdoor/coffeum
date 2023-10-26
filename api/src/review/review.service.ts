import { Injectable } from '@nestjs/common'
import { PrismaService } from 'src/prisma.service'
import { ReviewDto } from './review.dto'

@Injectable()
export class ReviewService {
	constructor(private prisma: PrismaService) {}

	getReviewById(id: number) {}

	getReviewsByProductId(productId: string) {
		return this.prisma.review.findMany({
			where: {
				productId,
			},
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

	createReview(dto: ReviewDto) {
		return this.prisma.review.create({
			data: {
				...dto,
			},
		})
	}
}
