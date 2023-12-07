import s from './dashboard.module.scss'
import SectionTitle from '@/components/ui/heading/section-title/SectionTitle'
import DashboardLayout from './layout/DashboardLayout'
import { NextPage } from 'next'

const Dashboard: NextPage = () => {
	return (
		<DashboardLayout title="Панель адміністратора">
			<SectionTitle
				style={{
					textAlign: 'center',
					marginBottom: '3rem',
				}}
			>
				Панель адміністратора
			</SectionTitle>
		</DashboardLayout>
	)
}

export default Dashboard
