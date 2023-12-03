import s from './dashboard-order-list.module.scss'
import { IOrder } from '@/shared/interfaces/order.interface'
import DashboardOrderListItem from './dashboard-order-list-item/DashboardOrderListItem'

const DashboardOrderList = ({ orders }: { orders: IOrder[] }) => {
	return (
		<ul className={s.list}>
			{orders?.map(order => (
				<DashboardOrderListItem key={order.id} order={order} />
			))}
		</ul>
	)
}

export default DashboardOrderList
