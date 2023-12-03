import DashboardOrders from '@/components/screens/dashboard/orders/DashboardOrders'
import { useAllOrders } from '@/hooks/useAllOrders'
import { useDebounce } from '@/hooks/useDebounce'
import { useGetFilterParams } from '@/hooks/useGetFilterParams'
import { EnumSort } from '@/interfaces/sort.interface'
import { useEffect } from 'react'

export default function DashboardOrdersPage() {
	const { query } = useGetFilterParams()

	const searchTerm = useDebounce(query, 500)

	const { orders, isLoading, error, refetch } = useAllOrders({
		limit: 10,
		page: 1,
		sortBy: EnumSort.NEWEST,
		searchTerm,
	})

	useEffect(() => {
		refetch()
	}, [searchTerm])

	return <DashboardOrders orders={orders || []} />
}
