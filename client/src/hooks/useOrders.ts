import orderService from '@/services/order/order.service'
import { useQuery } from '@tanstack/react-query'

export const useOrders = () => {
	const { data, isLoading } = useQuery(
		['get user orders'],
		() => orderService.getOrders(),
		{
			select: ({ data }) => data,
		}
	)

	return { orders: data, isLoading: isLoading }
}
