import s from './order-status.module.scss'
import { FC } from 'react'
import { getTime } from '@/utils/time'
import { EnumOrderStatus } from '@/shared/interfaces/order.interface'
import Text from '@/components/ui/heading/text/Text'
import { orderStatus } from './order-item.constant'
import SmallText from '@/components/ui/heading/small-text/SmallText'

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
				<SmallText>{getTime(createdAt)}</SmallText>
				<Text>{orderStatus[status]}</Text>
			</div>
		</div>
	)
}

export default OrderStatus
