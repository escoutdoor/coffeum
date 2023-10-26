import s from './account-navigation-box.module.scss'
import { IAccountNavigationBox } from '@/shared/interfaces/profile-navigation.interface'
import { useRouter } from 'next/router'
import { FC } from 'react'

const ProfileNavigationBox: FC<IAccountNavigationBox> = ({
	title,
	href,
	Icon,
	onClick,
}) => {
	const { push } = useRouter()

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
		<li className={s.box} onClick={handleClick}>
			<Icon />
			<h1 className={s.title}>{title}</h1>
		</li>
	)
}

export default ProfileNavigationBox
