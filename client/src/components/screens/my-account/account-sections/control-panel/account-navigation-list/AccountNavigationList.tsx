import s from './account-navigation-list.module.scss'
import { FC } from 'react'
import AccountNavigationBox from './account-navigation-box/AccountNavigationBox'
import { navigationProfile } from '@/helpers/navigation-profile'
import { useActions } from '@/hooks/useActions'
import { RxExit } from 'react-icons/rx'
import { useProfile } from '@/hooks/useProfile'
import { RiAdminLine } from 'react-icons/ri'

const ProfileNavigationList: FC = () => {
	const { isAdmin } = useProfile()
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
			{isAdmin && (
				<AccountNavigationBox
					title={'Панель адміністратора'}
					Icon={RiAdminLine}
					href="/dashboard"
				/>
			)}
		</ul>
	)
}

export default ProfileNavigationList
