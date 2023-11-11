import DarkButton from '@/components/ui/dark-button/DarkButton'
import Text from '@/components/ui/heading/text/Text'
import { useCancelOrder } from '@/hooks/useCancelOrder'
import { IOrder } from '@/shared/interfaces/order.interface'
import { getTime } from '@/utils/time'
import { FC } from 'react'

const OrderItem: FC<{ item: IOrder }> = ({ item }) => {
	const { cancelOrder, isLoading, error } = useCancelOrder()

	const total = item.items.reduce(
		(acc, item) => acc + item.product.discountedPrice * item.quantity,
		0
	)

	return (
		<tr>
			<td>
				<Text>{item.id}</Text>
			</td>
			<td>
				<Text>{getTime(item.createdAt)}</Text>
			</td>
			<td>
				<Text>{item.status}</Text>
			</td>
			<td>
				<Text>{total}</Text>
			</td>
			<td>
				<DarkButton onClick={() => cancelOrder(item.id)}></DarkButton>
			</td>
		</tr>
	)
}

export default OrderItem
