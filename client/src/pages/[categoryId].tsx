import Category from '@/components/screens/category/Category'
import { sidebarData } from '@/helpers/sidebar'
import { useFilteredProducts } from '@/hooks/useFilteredProducts'
import { useGetFilterParams } from '@/hooks/useGetFilterParams'
import { EnumProductType } from '@/shared/interfaces/product.interface'
import { camelize } from '@/utils/camelize'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

export default function CategoryPage() {
	const { query } = useRouter()

	const { categoryId } = query

	const sidebar =
		sidebarData[camelize(categoryId as string) as keyof typeof sidebarData]

	const params = useGetFilterParams(sidebar)

	const { isLoading, data, refetch, isError } = useFilteredProducts({
		type: categoryId as EnumProductType,
		data: params,
	})

	useEffect(() => {
		refetch()
	}, [query])

	return (
		<Category
			products={data?.products || []}
			length={data?.length || 0}
			params={params}
			isLoading={isLoading}
			sidebarData={sidebar}
			EnumProductType={categoryId as EnumProductType}
		/>
	)
}
