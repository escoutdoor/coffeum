import Link from 'next/link'
import s from './actions.module.scss'
import { FC } from 'react'
import Cart from './cart/Cart'
import { FiHeart } from 'react-icons/fi'
import { BiUser } from 'react-icons/bi'

const Actions: FC = () => {
	return (
		<div className={s.actions}>
			<Link href={'/my-account'}>
				<BiUser />
			</Link>
			<Link href={'/favorites'}>
				<FiHeart />
			</Link>
			<Cart />
		</div>
	)
}

export default Actions
