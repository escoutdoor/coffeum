import s from './product-price.module.scss'
import { FC } from 'react'

interface IProductPrice {
	size: 'sm' | 'lg'
	discountedPrice?: number
	originalPrice: number
}

const ProductPrice: FC<IProductPrice> = ({ size, discountedPrice, originalPrice }) => {
	return (
		<div className={size === 'lg' ? `${s.prices} ${s.lg}` : s.prices}>
			{discountedPrice !== originalPrice ? (
				<h1 className={`${s.price} ${s.original}`}>{originalPrice} ₴</h1>
			) : null}
			<h1 className={s.price}>{discountedPrice} ₴</h1>
		</div>
	)
}

export default ProductPrice
