import s from './cart.module.scss'
import { NextPage } from 'next'
import { useSearchParams } from 'next/navigation'
import Layout from '@/components/layout/Layout'
import PageHeader from '@/components/ui/page-header/PageHeader'
import CartHeader from './cart-header/CartHeader'
import CartTabs from './cart-tabs/CartTabs'
import { useCart } from '@/hooks/useCart'

const Cart: NextPage = () => {
	const { cart } = useCart()
	const { get } = useSearchParams()

	const activeTab = get('tab') || ''

	return (
		<Layout title="Кошик для покупок">
			<PageHeader title="Кошик для покупок" />
			<div className={s.cart}>
				{cart.length !== 0 && <CartHeader activeTab={activeTab} />}
				<CartTabs activeTab={activeTab} cart={cart} />
			</div>
		</Layout>
	)
}

export default Cart
