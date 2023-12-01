import { OrderService } from '@/services/order/order.service'
import { useMutation, useQueryClient } from '@tanstack/react-query'

export const useCancelOrder = () => {
	const queryClient = useQueryClient()

	const {
		mutate: cancelOrder,
		isLoading,
		error,
	} = useMutation({
		mutationKey: ['cancel order'],
		mutationFn: async (orderId: string) =>
			OrderService.cancelOrder(orderId),
		onSuccess: () => {
			queryClient.invalidateQueries(['get user orders'])
		},
	})

	return {
		cancelOrder,
		isLoading,
		error,
	}
}
