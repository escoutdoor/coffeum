import { navigationProfileSidebar } from '@/helpers/navigation-profile'
import s from './account-sidebar.module.scss'
import { FC } from 'react'
import AccountSideBarItem from './account-sidebar-item/AccountSideBarItem'
import { useActions } from '@/hooks/useActions'

const AccountSidebar: FC = () => {
	const { logout } = useActions()

	return (
		<ul className={s.sidebar}>
			{navigationProfileSidebar.map(item => (
				<AccountSideBarItem
					key={item.title}
					title={item.title}
					href={item.href}
				/>
			))}
			<AccountSideBarItem title={'Вийти'} onClick={logout} />
		</ul>
	)
}

export default AccountSidebar
