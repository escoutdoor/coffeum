import { FC } from 'react'
import s from './favorite-item-button.module.scss'
import { IProductItem } from '@/shared/interfaces/product.interface'
import { useActions } from '@/hooks/useActions'

const FavoriteItemButton: FC<{ product: IProductItem }> = ({ product }) => {
	const { addToCart } = useActions()

	return (
		<button
			className={s.button}
			onClick={() =>
				addToCart({
					quantity: 1,
					product: product,
				})
			}
		>
			додати в кошик
		</button>
	)
}

export default FavoriteItemButton
