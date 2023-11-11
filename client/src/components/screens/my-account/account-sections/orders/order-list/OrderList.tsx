import { useOrders } from '@/hooks/useOrders'
import { FC } from 'react'
import OrderItem from './order-item/OrderItem'

const OrderList: FC = () => {
	const { orders, isLoading } = useOrders()

	console.log(orders)

	return (
		<>
			{orders?.map(order => (
				<OrderItem key={order.id} item={order} />
			))}
		</>
	)
}

export default OrderList
