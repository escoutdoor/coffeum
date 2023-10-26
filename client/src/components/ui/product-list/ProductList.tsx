import s from './product-list.module.scss'
import { IProductItem } from '@/shared/interfaces/product.interface'
import { FC } from 'react'
import ProductItem from '../product-item/ProductItem'
import { useGetFilterParams } from '@/hooks/useGetFilterParams'
import Text from '../heading/text/Text'

const ProductList: FC<{ products: IProductItem[] }> = ({ products }) => {
	const { view } = useGetFilterParams()

	return (
		<div className={s.list}>
			{products.length ? (
				products.map(product => (
					<ProductItem key={product.id} item={product} view={view} />
				))
			) : (
				<Text>Продуктів не знайдено</Text>
			)}
		</div>
	)
}

export default ProductList
