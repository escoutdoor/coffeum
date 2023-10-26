import userService from '@/services/user/user.service'
import { useMutation, useQueryClient } from '@tanstack/react-query'

export const useToggleFavorite = () => {
	const queryClient = useQueryClient()

	return useMutation(
		['toggle favorite'],
		(productId: string) => userService.toggleFavorite(productId),
		{
			async onSuccess() {
				queryClient.invalidateQueries(['profile'])
			},
		}
	)
}
