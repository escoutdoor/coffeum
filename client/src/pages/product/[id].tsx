import Product from '@/components/screens/product/Product'
import Loading from '@/components/ui/loading/Loading'
import { useProduct } from '@/hooks/useProduct'
import { useSimilarProducts } from '@/hooks/useSimilarProducts'
import { IProduct } from '@/shared/interfaces/product.interface'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

export default function ProductPage() {
	const { query, replace } = useRouter()
	const id = query.id as string

	const { isLoading, product, error, status, isError } = useProduct(id)

	const {
		similarProducts,
		isLoading: isSimilarLoading,
		refetch,
	} = useSimilarProducts(id)

	useEffect(() => {
		if (product) {
			refetch()
		}
	}, [product])

	if (isError) {
		replace('/404')
	}

	return (
		<>
			{isLoading ? (
				<Loading full />
			) : product ? (
				<Product
					product={product}
					similarProducts={similarProducts || []}
				/>
			) : null}
		</>
	)
}
