import s from './dashboard-order-list-item.module.scss'
import { useState } from 'react'
import { IOrder } from '@/shared/interfaces/order.interface'
import { getTotalPrice } from '@/utils/get-total-price'
import { getName } from '@/utils/get-name'
import { FaAngleDown } from 'react-icons/fa'
import OrderStatus from '@/components/ui/order-status/OrderStatus'
import SmallText from '@/components/ui/heading/small-text/SmallText'
import Text from '@/components/ui/heading/text/Text'
import DashboardOrderModify from '../dashboard-order-modify/DashboardOrderModify'

const DashboardOrderListItem = ({ order }: { order: IOrder }) => {
	const [active, setActive] = useState(false)

	const total = getTotalPrice(order.items)

	return (
		<li
			className={active ? `${s.item} ${s.active}` : s.item}
			onClick={() => setActive(!active)}
		>
			<div className={s.preview}>
				<div className={s.details}>
					<OrderStatus
						status={order.status}
						createdAt={order.createdAt}
					/>
					<div className={s.preview__item}>
						<SmallText>Одержувач</SmallText>
						<Text>{getName(order)}</Text>
					</div>
					<div className={s.preview__item}>
						<SmallText>Телефон</SmallText>
						<Text>{order.phone}</Text>
					</div>
					<div className={s.preview__item}>
						<SmallText>Сума</SmallText>
						<Text>{total} грн</Text>
					</div>
				</div>
				<FaAngleDown />
			</div>
			<div className={s.dropdown} onClick={e => e.stopPropagation()}>
				<DashboardOrderModify order={order} />
			</div>
		</li>
	)
}

export default DashboardOrderListItem
