import DashboardProducts from '@/components/screens/dashboard/products/DashboardProducts'
import { useSearchProducts } from '@/hooks/useSearchProducts'
import { EnumSort } from '@/interfaces/sort.interface'
import { GetStaticPaths } from 'next'

export default function DashboardProductsPage() {
	const { products, length, isLoading, error } = useSearchProducts({
		limit: 60,
		page: 1,
		sortBy: EnumSort.POPULARITY,
	})

	return <DashboardProducts products={products || []} />
}
