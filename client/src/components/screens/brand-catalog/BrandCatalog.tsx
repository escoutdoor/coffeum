import Layout from '@/components/layout/Layout'
import PageHeader from '@/components/ui/page-header/PageHeader'
import Pagination from '@/components/ui/pagination/Pagination'
import ProductList from '@/components/ui/product-list/ProductList'
import SortingBar from '@/components/ui/sorting-bar/SortingBar'
import { useEffect } from 'react'
import { useGetFilterParams } from '@/hooks/useGetFilterParams'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useBrandProducts } from '@/hooks/useBrandProducts'

const BrandProducts: NextPage = () => {
	const router = useRouter()
	const id = router.query.id as string
	const { limit, sortBy, page } = useGetFilterParams()

	const { isLoading, data, refetch } = useBrandProducts({
		id,
		data: {
			limit,
			sortBy,
			page,
		},
	})

	useEffect(() => {
		refetch()
	}, [router.query])

	return (
		<Layout
			title={id}
			description={`Explore ${id} Coffee Products - Dive into the world of ${id} coffee products. Discover a rich selection of their finest brews and coffee essentials.`}
		>
			<PageHeader title={id} />
			<SortingBar />
			<ProductList
				products={data?.products || []}
				isLoading={isLoading}
			/>
			<Pagination length={data?.length as number} />
		</Layout>
	)
}

export default BrandProducts
