import s from './order-item.module.scss'
import { FC, useState } from 'react'
import { useCancelOrder } from '@/hooks/useCancelOrder'
import { EnumOrderStatus, IOrder } from '@/shared/interfaces/order.interface'
import { getTime } from '@/utils/time'
import BrownLink from '@/components/ui/heading/brown-link/BrownLink'
import Text from '@/components/ui/heading/text/Text'
import Thumbnail from '@/components/ui/thumbnail/Thumbnail'
import { orderStatus } from './order-item.constant'

const OrderItem: FC<{ item: IOrder }> = ({ item }) => {
	const { cancelOrder, isLoading, error } = useCancelOrder()

	const total = item.quantity * item.product.discountedPrice

	return (
		<tr className={s.item}>
			<td>
				<Thumbnail
					productId={item.product.id}
					image={`/images/img/products/${item.product.image}`}
				/>
			</td>
			<td>
				<Text>{getTime(item.order.createdAt)}</Text>
			</td>
			<td>
				<Text>{orderStatus[item.order.status]}</Text>
			</td>
			<td>
				<Text>{total} ₴</Text>
			</td>
			<td>
				{item.order.status === EnumOrderStatus.PENDING ? (
					<BrownLink onClick={() => cancelOrder(item.order.id)}>
						Скасувати замовлення
					</BrownLink>
				) : (
					<Text>Замовлення виконано</Text>
				)}
			</td>
		</tr>
	)
}

export default OrderItem
