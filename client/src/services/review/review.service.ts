import axios from 'axios'
import { ReviewInfo } from './review.type'
import { IReview } from '@/shared/interfaces/product.interface'

class ReviewService {
	private REVIEWS_URL = '/api/reviews/'

	async createReview(reviewData: ReviewInfo) {
		return await axios.post<IReview>(`${this.REVIEWS_URL}`, reviewData)
	}

	async getReviewsByProductId(productId: string) {
		return await axios.get<number>(`${this.REVIEWS_URL}avg/${productId}`)
	}
}

export default new ReviewService()
