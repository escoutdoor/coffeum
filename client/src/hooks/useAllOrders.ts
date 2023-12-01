import { OrderService } from '@/services/order/order.service'
import { useQuery } from '@tanstack/react-query'

export const useAllOrders = () => {
	const {
		data: orders,
		isLoading,
		error,
	} = useQuery({
		queryKey: ['orders'],
		queryFn: async () => await OrderService.getAll(),
		select: ({ data }) => data,
	})

	return {
		orders,
		isLoading,
		error,
	}
}
