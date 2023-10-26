import reviewService from '@/services/review/review.service'
import { ReviewInfo } from '@/services/review/review.type'
import { useMutation, useQueryClient } from '@tanstack/react-query'

export const useCreateReview = (productId: string) => {
	const queryClient = useQueryClient()

	const { mutate: createReview } = useMutation(
		['create review'],
		(reviewData: ReviewInfo) => reviewService.createReview(reviewData),
		{
			async onSuccess() {
				queryClient.invalidateQueries(['avg rating', productId])
				queryClient.invalidateQueries(['product', productId])
			},
		}
	)

	return { createReview }
}
