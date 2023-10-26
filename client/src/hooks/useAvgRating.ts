import reviewService from '@/services/review/review.service'
import { useQuery } from '@tanstack/react-query'

export const useAvgRating = (productId: string) => {
	return useQuery(
		['avg rating', productId],
		() => reviewService.getReviewsByProductId(productId),
		{
			select: ({ data }) => data,
			enabled: !!productId,
		}
	)
}
