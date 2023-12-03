import { OrderService } from '@/services/order/order.service'
import { IFilterSort } from '@/shared/interfaces/filter-data.interface'
import { useQuery } from '@tanstack/react-query'

export const useAllOrders = (data: IFilterSort) => {
	const {
		data: orders,
		isLoading,
		error,
		refetch,
	} = useQuery({
		queryKey: ['orders'],
		queryFn: async () => await OrderService.getAll(data),
		select: ({ data }) => data,
	})

	return {
		orders,
		isLoading,
		error,
		refetch,
	}
}
