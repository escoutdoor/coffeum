import Link from 'next/link'
import s from './cart.module.scss'
import { FC, useState } from 'react'
import { AiOutlineShopping } from 'react-icons/ai'
import { RiArrowDownSLine } from 'react-icons/ri'
import ICartItem from '@/shared/interfaces/cart-item.interface'
import MiniCartItem from './mini-cart-item/MiniCartItem'
import { products } from '@/helpers/products'
import { useCart } from '@/hooks/useCart'

const Cart: FC = () => {
	const { cart, total } = useCart()

	return (
		<div className={s.cart}>
			<div className={s.header}>
				<div className={s.icon}>
					<AiOutlineShopping />
					<span>{cart.length}</span>
				</div>
				<RiArrowDownSLine />
			</div>
			<div className={s.menu}>
				<div className={s.menu__header}>
					<span>
						{cart.length} {cart.length === 1 ? 'Товар' : 'Товарів'}
					</span>
					<Link href={'/cart'}>перегляд кошика</Link>
				</div>
				<ul className={s.list}>
					{cart.length ? (
						<>
							{cart.map((item, index) => (
								<MiniCartItem item={item} key={index} />
							))}
						</>
					) : (
						<p>Немає товарів у кошику.</p>
					)}
				</ul>
				{cart.length && (
					<div className={s.menu__bottom}>
						<div className={s.total}>
							<span>разом:</span>
							<h1>{total} ₴</h1>
						</div>
						<Link className={s.button} href={''}>
							Оформлення замовлення
						</Link>
					</div>
				)}
			</div>
		</div>
	)
}

export default Cart
