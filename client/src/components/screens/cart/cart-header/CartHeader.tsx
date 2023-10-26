import s from './cart-header.module.scss'
import { FC } from 'react'
import CartHeaderItem from './cart-header-item/CartHeaderItem'

const CartHeader: FC<{ activeTab: string }> = ({ activeTab }) => {
	const isActiveCheckout =
		activeTab === 'completion' || activeTab === 'checkout'

	const isActiveCompletion = activeTab === 'completion'

	return (
		<ul className={s.header}>
			<CartHeaderItem
				isActive
				href="/cart"
				title="Кошик для покупок"
				isActiveIcon={isActiveCheckout}
			/>
			<CartHeaderItem
				isActive={isActiveCheckout}
				href="?tab=checkout"
				title="Оформлення замовлення"
				isActiveIcon={activeTab === 'completion'}
			/>
			<CartHeaderItem
				isDisabled
				isActive={isActiveCompletion}
				href="?tab=completion"
				title="Завершення замовлення"
			/>
		</ul>
	)
}

export default CartHeader
