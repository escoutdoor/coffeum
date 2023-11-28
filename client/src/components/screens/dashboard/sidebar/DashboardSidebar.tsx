import DashboardNavigation from './dashboard-navigation/DashboardNavigation'
import s from './dashboard-sidebar.module.scss'
import { FC } from 'react'
const DashboardSidebar: FC = () => {
	return (
		<div className={s.sidebar}>
			<DashboardNavigation />
		</div>
	)
}

export default DashboardSidebar
