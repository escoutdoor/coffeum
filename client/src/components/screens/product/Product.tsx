import s from './product.module.scss'
import { useRouter } from 'next/router'
import { NextPage } from 'next'
import Layout from '@/components/layout/Layout'
import PageHeader from '@/components/ui/page-header/PageHeader'
import ProductImage from './product-image/ProductImage'
import ProductDetails from './product-details/ProductDetails'
import ProductTabs from './product-tabs/ProductTabs'
import CarouselWithTitle from '@/components/ui/carousel-with-title/CarouselWithTitle'
import { useProduct } from '@/hooks/useProduct'
import { useSimilarProducts } from '@/hooks/useSimilarProducts'
import { useEffect } from 'react'

const Product: NextPage = () => {
	const router = useRouter()
	const id = router.query.id as string

	const { isLoading, data: product } = useProduct(id)

	const {
		products,
		isLoading: isSimilarLoading,
		refetch,
	} = useSimilarProducts(id)

	useEffect(() => {
		if (product) {
			refetch()
		}
	}, [product])

	return (
		<Layout title={`${product?.name}`}>
			<PageHeader
				title={`${product?.name}`}
				tags={[
					{
						title: product?.categories[1] as string,
						link: `/${product?.type}?category=${product?.categories[1]}`,
					},
				]}
			/>
			{product ? (
				<div className={s.product}>
					<div className={s.summary}>
						<ProductImage
							title={product.name || ''}
							image={`/images/img/products/${product.image}`}
						/>
						<ProductDetails product={product} />
					</div>
					<ProductTabs product={product} />
					{products?.length && (
						<CarouselWithTitle
							title="схожі товари"
							products={products}
						/>
					)}
				</div>
			) : (
				<p>Loading...</p>
			)}
		</Layout>
	)
}

export default Product
