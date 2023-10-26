import s from './cart.module.scss'
import { NextPage } from 'next'
import { useSearchParams } from 'next/navigation'
import Layout from '@/components/layout/Layout'
import PageHeader from '@/components/ui/page-header/PageHeader'
import CartHeader from './cart-header/CartHeader'
import CartTabs from './cart-tabs/CartTabs'
<<<<<<< HEAD
import { useCart } from '@/hooks/useCart'

const Cart: NextPage = () => {
	const { cart } = useCart()
=======

const Cart: NextPage = () => {
>>>>>>> 5159a9b674539dc2e2001b7e508ac086cc645379
	const { get } = useSearchParams()

	const activeTab = get('tab') || ''

	return (
		<Layout title="Кошик для покупок">
			<PageHeader title="Кошик для покупок" />
			<div className={s.cart}>
<<<<<<< HEAD
				{cart.length !== 0 && <CartHeader activeTab={activeTab} />}
				<CartTabs activeTab={activeTab} cart={cart} />
=======
				<CartHeader activeTab={activeTab} />
				<CartTabs activeTab={activeTab} />
>>>>>>> 5159a9b674539dc2e2001b7e508ac086cc645379
			</div>
		</Layout>
	)
}

export default Cart
