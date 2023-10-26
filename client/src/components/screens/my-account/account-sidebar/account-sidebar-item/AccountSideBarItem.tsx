import s from './account-sidebar-item.module.scss'
import { IAccountSidebarItem } from '@/shared/interfaces/profile-navigation.interface'
import { FC } from 'react'
import { useRouter } from 'next/router'

const AccountSideBarItem: FC<IAccountSidebarItem> = ({
	title,
	href,
	onClick,
}) => {
	const { push, asPath } = useRouter()

	const handleClick = () => {
		if (!href && !onClick) return

		if (onClick) {
			onClick()
		}

		if (href) {
			push(href)
		}
	}

	return (
		<li
			className={asPath === href ? `${s.item} ${s.active}` : s.item}
			onClick={handleClick}
		>
			{title}
		</li>
	)
}

export default AccountSideBarItem
