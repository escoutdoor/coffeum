import axios from 'axios'
import { ReviewInfo } from './review.type'
import { IReview } from '@/shared/interfaces/product.interface'
import { instance } from '@/api/api.interceptor'

class ReviewService {
	private REVIEWS_URL = '/api/reviews/'

	async createReview(data: ReviewInfo) {
		return await instance<IReview>({
			method: 'POST',
			url: `${this.REVIEWS_URL}`,
			data,
		})
	}

	async getReviewsByProductId(productId: string) {
		return await axios.get<number>(`${this.REVIEWS_URL}avg/${productId}`)
	}
}

export default new ReviewService()
