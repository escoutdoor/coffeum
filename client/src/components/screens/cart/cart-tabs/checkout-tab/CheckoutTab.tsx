import s from './checkout-tab.module.scss'
import { FC } from 'react'
import { useCart } from '@/hooks/useCart'
import MiddleTitle from '@/components/ui/heading/middle-title/MiddleTitle'
import CartRightbar from '../../cart-rightbar/CartRightbar'
import CartRightbarItem from '../../cart-rightbar/cart-rightbar-item/CartRightbarItem'
import CartList from './cart-list/CartList'
import SectionTitle from '@/components/ui/heading/section-title/SectionTitle'
import DarkButton from '@/components/ui/dark-button/DarkButton'
import CheckoutForm from './checkout-form/CheckoutForm'

const CheckoutTab: FC = () => {
	const { cart, total } = useCart()

	return (
		<div className={s.checkout}>
			<main>
				<SectionTitle
					style={{
						marginBottom: '13px',
					}}
				>
					Платіжна інформація
				</SectionTitle>
				<CheckoutForm />
			</main>
			<CartRightbar title="Ваше замовлення">
				<CartRightbarItem>
					<MiddleTitle>Товар</MiddleTitle>
				</CartRightbarItem>
				<CartRightbarItem>
					<CartList cart={cart} />
					<div
						className={s.centered}
						style={{
							marginTop: '20px',
						}}
					>
						<MiddleTitle>Проміжний підсумок</MiddleTitle>
						<span className={s.thin__text}>{total} ₴</span>
					</div>
				</CartRightbarItem>
				<CartRightbarItem>
					<MiddleTitle>Доставка</MiddleTitle>
				</CartRightbarItem>
				<CartRightbarItem>
					<div className={s.centered}>
						<MiddleTitle>Загалом</MiddleTitle>
						<SectionTitle>{total} ₴</SectionTitle>
					</div>
				</CartRightbarItem>
				<CartRightbarItem>
					<MiddleTitle>Способи оплати</MiddleTitle>
				</CartRightbarItem>
				<DarkButton
					type="submit"
					style={{
						marginTop: '20px',
						width: '100%',
					}}
				>
					Підтвердити замовлення
				</DarkButton>
			</CartRightbar>
		</div>
	)
}

export default CheckoutTab
