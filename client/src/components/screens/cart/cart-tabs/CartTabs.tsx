import s from './cart-tabs.module.scss'
import { FC } from 'react'
import CheckoutTab from './checkout-tab/CheckoutTab'
import CartTab from './cart-tab/CartTab'
import ICartItem from '@/shared/interfaces/cart-item.interface'
import OrderCompletionTab from './order-completion-tab/OrderCompletionTab'
import NoList from '@/components/ui/no-list/NoList'

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
				<NoList message="Кошик порожній" />
			)}
		</div>
	)
}

export default CartTabs
