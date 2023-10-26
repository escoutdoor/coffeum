import s from './cart-rightbar.module.scss'
import { FC, PropsWithChildren } from 'react'

const CartRightbar: FC<
	PropsWithChildren<React.HTMLAttributes<HTMLDivElement>> & { title: string }
> = ({ children, title, ...rest }) => {
	return (
		<div className={s.rightbar} {...rest}>
			<h1 className={s.title}>{title}</h1>
			<main>{children}</main>
		</div>
	)
}

export default CartRightbar
