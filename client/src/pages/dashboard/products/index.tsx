import DashboardProducts from '@/components/screens/dashboard/products/DashboardProducts'
import { useDebounce } from '@/hooks/useDebounce'
import { useGetFilterParams } from '@/hooks/useGetFilterParams'
import { useSearchProducts } from '@/hooks/useSearchProducts'
import { EnumSort } from '@/interfaces/sort.interface'
import { useEffect } from 'react'

export default function DashboardProductsPage() {
	const { query } = useGetFilterParams()

	const searchTerm = useDebounce(query, 1000)

	const { products, length, isLoading, error, refetch } = useSearchProducts({
		limit: 10,
		page: 1,
		searchTerm,
		sortBy: EnumSort.POPULARITY,
	})

	useEffect(() => {
		refetch()
	}, [searchTerm])

	return <DashboardProducts products={products || []} />
}
