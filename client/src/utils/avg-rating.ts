import { IReview } from '@/shared/interfaces/product.interface'

export const getAverageRating = (reviews: IReview[] | undefined): number => {
	if (!reviews?.length) {
		return 0
	}

	const res = Math.round(
		reviews.reduce((acc, current) => acc + current.rating, 0) /
			reviews.length
	)

	return res
}
