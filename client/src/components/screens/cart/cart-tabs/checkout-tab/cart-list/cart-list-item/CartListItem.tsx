import s from './cart-list-item.module.scss'
import ICartItem from '@/shared/interfaces/cart-item.interface'
import { FC } from 'react'

const CartListItem: FC<{ item: ICartItem }> = ({ item }) => {
	return (
		<li className={s.item}>
			<span className={s.product__name}>
				{item.product.name} × {item.quantity}
			</span>
			<span className={s.price}>
				{item.quantity * item.product.discountedPrice} ₴
			</span>
		</li>
	)
}

export default CartListItem
