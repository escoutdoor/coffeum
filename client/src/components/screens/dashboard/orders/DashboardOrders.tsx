import s from './dashboard-orders.module.scss'
import { NextPage } from 'next'
import { IOrder } from '@/shared/interfaces/order.interface'
import DashboardLayout from '../layout/DashboardLayout'
import SectionTitle from '@/components/ui/heading/section-title/SectionTitle'
import DashboardOrderList from './dashboard-order-list/DashboardOrderList'

const DashboardOrders: NextPage<{ orders: IOrder[] }> = ({ orders }) => {
	return (
		<DashboardLayout title="Замовлення">
			<div className={s.orders}>
				<SectionTitle
					style={{
						margin: '3rem 0',
					}}
				>
					Замовлення
				</SectionTitle>

				<DashboardOrderList orders={orders} />
			</div>
		</DashboardLayout>
	)
}

export default DashboardOrders
