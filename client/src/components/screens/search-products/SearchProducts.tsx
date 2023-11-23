import s from './search-products.module.scss'
import { useEffect } from 'react'
import Layout from '@/components/layout/Layout'
import PageHeader from '@/components/ui/page-header/PageHeader'
import SortingBar from '@/components/ui/sorting-bar/SortingBar'
import { useGetFilterParams } from '@/hooks/useGetFilterParams'
import { useSearchProducts } from '@/hooks/useSearchProducts'
import { NextPage } from 'next'
import ProductList from '@/components/ui/product-list/ProductList'
import Pagination from '@/components/ui/pagination/Pagination'
import { useDebounce } from '@/hooks/useDebounce'

const SearchProducts: NextPage = () => {
	const { query, sortBy, limit, page } = useGetFilterParams()

	const searchTerm = useDebounce(query)

	const { isLoading, data, refetch } = useSearchProducts({
		searchTerm,
		sortBy,
		limit,
		page,
	})

	useEffect(() => {
		refetch()
	}, [sortBy, limit, page, searchTerm])

	return (
		<Layout title={`Пошук продуктів`}>
			<PageHeader
				title={
					searchTerm
						? `Результати пошуку для ${searchTerm}`
						: 'Пошук продуктів'
				}
			/>
			<div className={s.search__products}>
				<SortingBar />
				{isLoading ? (
					<p>Loading...</p>
				) : data?.products ? (
					<ProductList products={data.products} />
				) : null}
				<Pagination length={data?.length as number} />
			</div>
		</Layout>
	)
}

export default SearchProducts
