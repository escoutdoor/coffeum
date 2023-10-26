import ICartItem from '@/shared/interfaces/cart-item.interface'
import { FC } from 'react'
import CartListItem from './cart-list-item/CartListItem'

const CartList: FC<{ cart: ICartItem[] }> = ({ cart }) => {
	return (
		<ul>
			{cart.map((item, index) => (
				<CartListItem key={index} item={item} />
			))}
		</ul>
	)
}

export default CartList
