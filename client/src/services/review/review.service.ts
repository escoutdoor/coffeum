import { ReviewInfo } from './review.type'
import { IReview } from '@/shared/interfaces/product.interface'
import { instance } from '@/api/api.interceptor'

const REVIEWS_URL = 'reviews'

export const ReviewService = {
	async create(data: ReviewInfo) {
		return await instance<IReview>({
			method: 'POST',
			url: `${REVIEWS_URL}`,
			data,
		})
	},
}
