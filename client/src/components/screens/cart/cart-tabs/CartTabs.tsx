import s from './cart-tabs.module.scss'
import { FC } from 'react'
import CheckoutTab from './checkout-tab/CheckoutTab'
import CartTab from './cart-tab/CartTab'
import NoCart from './no-cart/NoCart'
import ICartItem from '@/shared/interfaces/cart-item.interface'

const CartTabs: FC<{ activeTab: string; cart: ICartItem[] }> = ({
	activeTab,
	cart,
}) => {
	return (
		<div className={s.tab}>
			{cart.length ? (
				activeTab === 'checkout' ? (
					<CheckoutTab />
				) : activeTab === 'completion' ? (
					<div>CompletionTab</div>
				) : (
					<CartTab />
				)
			) : (
				<NoCart />
			)}
		</div>
	)
}

export default CartTabs
