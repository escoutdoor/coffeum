import s from './product-list.module.scss'
import { IProductItem } from '@/shared/interfaces/product.interface'
import { FC } from 'react'
import ProductItem from '../product-item/ProductItem'
import { useGetFilterParams } from '@/hooks/useGetFilterParams'
import Text from '../heading/text/Text'
import Loading from '../loading/Loading'

const ProductList: FC<{ products: IProductItem[]; isLoading: boolean }> = ({
	products,
	isLoading,
}) => {
	const { view } = useGetFilterParams()

	return (
		<div className={s.content}>
			{isLoading ? (
				<Loading />
			) : products.length ? (
				<div className={s.list}>
					{products.map(product => (
						<ProductItem
							key={product.id}
							item={product}
							view={view}
						/>
					))}
				</div>
			) : (
				<Text>Продуктів не знайдено</Text>
			)}
		</div>
	)
}

export default ProductList
