import Meta from '@/components/seo/Meta'
import DashboardSidebar from '../sidebar/DashboardSidebar'
import s from './dashboard-layout.module.scss'
import { FC, PropsWithChildren } from 'react'

const DashboardLayout: FC<
	PropsWithChildren<{
		title: string
	}>
> = ({ children, title }) => {
	return (
		<Meta title={title}>
			<div className={s.layout}>
				<DashboardSidebar />

				<main>
					<div className="wrapper">{children}</div>
				</main>
			</div>
		</Meta>
	)
}

export default DashboardLayout
