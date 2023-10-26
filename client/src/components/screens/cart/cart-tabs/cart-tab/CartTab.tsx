import s from './cart-tab.module.scss'
import Table from '@/components/ui/table/Table'
import { FC } from 'react'
import CartRightbar from '../../cart-rightbar/CartRightbar'
import CartRightbarItem from '../../cart-rightbar/cart-rightbar-item/CartRightbarItem'
import DarkButton from '@/components/ui/dark-button/DarkButton'
import { useCart } from '@/hooks/useCart'
import CartItem from '../../cart-item/CartItem'
import { useRouter } from 'next/router'
import MiddleTitle from '@/components/ui/heading/middle-title/MiddleTitle'
import SectionTitle from '@/components/ui/heading/section-title/SectionTitle'

const CartTab: FC = () => {
	const { cart, total } = useCart()
	const { push } = useRouter()

	return (
		<div className={s.main}>
			<Table items={['Товар', 'Ціна', 'Кількість', 'Підсумок']}>
				{cart.map((item, index) => (
					<CartItem key={index} {...item} />
				))}
			</Table>
			<CartRightbar
				title="разом в кошику"
				style={{
					flex: '0 0 33%',
				}}
			>
				<CartRightbarItem>
					<div className={s.centered__item}>
						<MiddleTitle>Проміжний підсумок:</MiddleTitle>
						<span className={s.thin__text}>{total} ₴</span>
					</div>
				</CartRightbarItem>
				<CartRightbarItem>
					<MiddleTitle>Доставка</MiddleTitle>
					<MiddleTitle
						style={{
							marginTop: '10px',
						}}
					>
						<span className={s.thin__text}>Доставка до </span>Київ,
						Київська область, 01001
					</MiddleTitle>
				</CartRightbarItem>
				<CartRightbarItem>
					<div className={s.centered__item}>
						<MiddleTitle>Разом:</MiddleTitle>
						<SectionTitle>{total} ₴</SectionTitle>
					</div>
				</CartRightbarItem>
				<DarkButton
					style={{
						width: '100%',
						margin: '30px 0 10px 0',
					}}
					onClick={() => push('?tab=checkout')}
				>
					Перейти до оформлення
				</DarkButton>
			</CartRightbar>
		</div>
	)
}

export default CartTab
