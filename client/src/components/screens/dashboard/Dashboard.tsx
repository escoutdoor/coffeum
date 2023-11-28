import s from './dashboard.module.scss'
import DashboardLayout from './layout/DashboardLayout'
import { NextPage } from 'next'

const Dashboard: NextPage = () => {
	return (
		<DashboardLayout title="Dashboard">
			Home page of Dashboard
		</DashboardLayout>
	)
}

export default Dashboard
