import { useRouter } from 'next/router'
import { FC } from 'react'
import { BiChevronRight } from 'react-icons/bi'
import s from './cart-header-item.module.scss'

interface ICartHeaderItem {
	isActive: boolean
	href: string
	title: string
	isDisabled?: boolean
	isActiveIcon?: boolean
}

const CartHeaderItem: FC<ICartHeaderItem> = ({
	isActive,
	href,
	title,
	isDisabled,
	isActiveIcon,
}) => {
	const { push } = useRouter()

	return (
		<li
			className={
				isActive
					? `${s.header__item} ${s.active}`
					: isDisabled
					? `${s.header__item} ${s.disabled}`
					: s.header__item
			}
			onClick={() =>
				push(href, undefined, { shallow: true, scroll: false })
			}
		>
			<h1>{title}</h1>
			{!isDisabled && (
				<BiChevronRight
					className={isActiveIcon ? `${s.icon} ${s.active}` : s.icon}
				/>
			)}
		</li>
	)
}

export default CartHeaderItem
