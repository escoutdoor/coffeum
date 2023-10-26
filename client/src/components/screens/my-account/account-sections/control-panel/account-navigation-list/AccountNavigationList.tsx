import s from './account-navigation-list.module.scss'
import { FC } from 'react'
import AccountNavigationBox from './account-navigation-box/AccountNavigationBox'
import { navigationProfile } from '@/helpers/navigation-profile'
import { useActions } from '@/hooks/useActions'
import { RxExit } from 'react-icons/rx'

const ProfileNavigationList: FC = () => {
	const { logout } = useActions()

	return (
		<ul className={s.list}>
			{navigationProfile.map(item => (
				<AccountNavigationBox
					key={item.title}
					title={item.title}
					Icon={item.Icon}
					href={item.href}
					onClick={item.onClick}
				/>
			))}
			<AccountNavigationBox
				title={'Вийти'}
				Icon={RxExit}
				onClick={logout}
			/>
		</ul>
	)
}

export default ProfileNavigationList
