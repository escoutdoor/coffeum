import s from './control-panel.module.scss'
import { FC } from 'react'
import AccountNavigationList from './account-navigation-list/AccountNavigationList'
import BrownLink from '@/components/ui/heading/brown-link/BrownLink'
import { useActions } from '@/hooks/useActions'
import { useProfile } from '@/hooks/useProfile'
import { getName } from '@/utils/get-name'

const ControlPanel: FC = () => {
	const { profile } = useProfile()
	const { logout } = useActions()

	return (
		<div className={s.panel}>
			<div className={s.details}>
				<p className={s.text}>
					Вітаємо, <strong>{getName({ ...profile })}</strong> (не{' '}
					<strong>{getName({ ...profile })}</strong>?{' '}
					<BrownLink onClick={logout}>Вийти</BrownLink>)
				</p>
				<p className={s.text}>
					На інформаційній панелі облікового запису ви можете
					переглядати{' '}
					<BrownLink href="?section=orders">
						останні замовлення,{' '}
					</BrownLink>
					керувати вашими{' '}
					<BrownLink href="?section=address">
						відправними та платіжними адресами
					</BrownLink>
					та{' '}
					<BrownLink href="?section=edit-account">
						редагувати свій пароль та дані облікового запису.
					</BrownLink>
				</p>
			</div>
			<AccountNavigationList />
		</div>
	)
}

export default ControlPanel
