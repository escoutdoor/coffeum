import s from './cart-tabs.module.scss'
import { FC } from 'react'
import CheckoutTab from './checkout-tab/CheckoutTab'
import CartTab from './cart-tab/CartTab'
import NoCart from './no-cart/NoCart'
import ICartItem from '@/shared/interfaces/cart-item.interface'
import OrderCompletionTab from './order-completion-tab/OrderCompletionTab'

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
					<OrderCompletionTab />
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
