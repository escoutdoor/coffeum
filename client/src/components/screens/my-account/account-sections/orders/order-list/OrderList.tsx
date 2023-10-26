import { useOrders } from '@/hooks/useOrders'
import { FC } from 'react'

const OrderList: FC = () => {
	const { orders, isLoading } = useOrders()

	return <div>OrderList</div>
}

export default OrderList
