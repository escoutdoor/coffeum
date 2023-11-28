import s from './order-item.module.scss'
import { FC, useState } from 'react'
import { IOrder } from '@/shared/interfaces/order.interface'
import { FaAngleDown } from 'react-icons/fa6'
import OrderStatus from './order-status/OrderStatus'
import Text from '@/components/ui/heading/text/Text'
import OrderDetails from './order-details/OrderDetails'
import Miniature from '@/components/ui/miniature/Miniature'

const OrderItem: FC<{ item: IOrder }> = ({ item }) => {
	const [active, setActive] = useState<boolean>(false)

	const total = item.quantity * item.product.discountedPrice

	return (
		<div
			className={active ? `${s.item} ${s.active}` : s.item}
			onClick={() => setActive(!active)}
		>
			<div className={s.preview}>
				<OrderStatus
					status={item.order.status}
					createdAt={item.order.createdAt}
				/>
				<div className={s.price}>
					<p className={s.text}>Сума</p>
					<Text>{total} ₴</Text>
				</div>
				<div className={s.right}>
					<Miniature
						src={`/images/img/products/${item.product.image}`}
					/>
					<FaAngleDown />
				</div>
			</div>
			<div className={s.dropdown} onClick={e => e.stopPropagation()}>
				<OrderDetails item={item} />
			</div>
		</div>
	)
}

export default OrderItem
