import { FC } from 'react'
import OrderItem from './order-item/OrderItem'
import { IOrder } from '@/shared/interfaces/order.interface'

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
