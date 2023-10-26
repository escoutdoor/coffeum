import reviewService from '@/services/review/review.service'
import { ReviewInfo } from '@/services/review/review.type'
import { useMutation, useQueryClient } from '@tanstack/react-query'

export const useCreateReview = (productId: string) => {
	const queryClient = useQueryClient()

<<<<<<< HEAD
	const { mutate: createReview } = useMutation(
=======
	return useMutation(
>>>>>>> 5159a9b674539dc2e2001b7e508ac086cc645379
		['create review'],
		(reviewData: ReviewInfo) => reviewService.createReview(reviewData),
		{
			async onSuccess() {
				queryClient.invalidateQueries(['avg rating', productId])
				queryClient.invalidateQueries(['product', productId])
			},
		}
	)
<<<<<<< HEAD

	return { createReview }
=======
>>>>>>> 5159a9b674539dc2e2001b7e508ac086cc645379
}
