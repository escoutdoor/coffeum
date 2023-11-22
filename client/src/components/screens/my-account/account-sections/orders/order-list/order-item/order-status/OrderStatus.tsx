import s from './order-status.module.scss'
import { FC } from 'react'
import { EnumOrderStatus } from '@/shared/interfaces/order.interface'
import { orderStatus } from '../order-item.constant'
import Text from '@/components/ui/heading/text/Text'
import { getTime } from '@/utils/time'

const OrderStatus: FC<{
	status: EnumOrderStatus
	createdAt: Date
}> = ({ status, createdAt }) => {
	return (
		<div className={s.order__status}>
			<span
				className={`${s.progress__bar} ${
					status === EnumOrderStatus.PENDING
						? s.pending
						: status === EnumOrderStatus.PAYED
						? s.payed
						: status === EnumOrderStatus.SHIPPED
						? s.shipped
						: status === EnumOrderStatus.DELIVERED
						? s.delivered
						: ''
				}`}
			/>
			<div className={s.text}>
				<p className={s.time}>{getTime(createdAt)}</p>
				<Text>{orderStatus[status]}</Text>
			</div>
		</div>
	)
}

export default OrderStatus
