import s from './dashboard-navigation.module.scss'
import { FC } from 'react'
import { dashboardRoutes } from '@/helpers/dashboard-routes'
import DashboardNavigationItem from './dashboard-navigation-item/DashboardNavigationItem'

const DashboardNavigation: FC = () => {
	return (
		<ul className={s.list}>
			{dashboardRoutes.map(item => (
				<DashboardNavigationItem key={item.id} item={item} />
			))}
		</ul>
	)
}

export default DashboardNavigation
