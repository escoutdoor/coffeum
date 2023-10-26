import s from './cart-rightbar-item.module.scss'
import { FC, PropsWithChildren } from 'react'

const CartRightbarItem: FC<
	PropsWithChildren<React.HtmlHTMLAttributes<HTMLDivElement>>
> = ({ children, ...rest }) => {
	return (
		<div className={s.item} {...rest}>
			{children}
		</div>
	)
}

export default CartRightbarItem
