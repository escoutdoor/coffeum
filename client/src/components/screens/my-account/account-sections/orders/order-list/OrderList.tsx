import { FC } from 'react'
import { IOrder } from '@/shared/interfaces/order.interface'
import OrderItem from './order-item/OrderItem'

const OrderList: FC<{ orders: IOrder[] }> = ({ orders }) => {
	return (
		<>
			{orders?.map(order => (
				<OrderItem key={order.id} item={order} />
			))}
		</>
	)
}

export default OrderList
