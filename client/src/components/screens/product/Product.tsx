import s from './product.module.scss'
import Layout from '@/components/layout/Layout'
import PageHeader from '@/components/ui/page-header/PageHeader'
import ProductImage from './product-image/ProductImage'
import ProductDetails from './product-details/ProductDetails'
import ProductTabs from './product-tabs/ProductTabs'
import CarouselWithTitle from '@/components/ui/carousel-with-title/CarouselWithTitle'
import { IProduct } from '@/shared/interfaces/product.interface'
import Loading from '@/components/ui/loading/Loading'

const Product = ({
	product,
	similarProducts,
}: {
	product: IProduct
	similarProducts: IProduct[]
}) => {
	return (
		<Layout title={`${product?.name}`}>
			<PageHeader
				title={`${product?.name}`}
				tags={[
					{
						title: product?.categories[
							product.categories.length - 1
						] as string,
						link: `/${product?.type}?category=${product?.categories[1]}`,
					},
				]}
			/>
			{product ? (
				<div className={s.product}>
					<div className={s.summary}>
						<ProductImage
							title={product.name || ''}
							image={`/images/img/products/${
								product.image || 'no-image.jpg'
							}`}
						/>
						<ProductDetails product={product} />
					</div>
					<ProductTabs product={product} />
					{similarProducts?.length ? (
						<CarouselWithTitle
							title="схожі товари"
							products={similarProducts}
						/>
					) : null}
				</div>
			) : (
				<Loading />
			)}
		</Layout>
	)
}

export default Product
