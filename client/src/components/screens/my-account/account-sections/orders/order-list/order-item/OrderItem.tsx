import s from './order-item.module.scss'
import { FC, useState } from 'react'
import { useCancelOrder } from '@/hooks/useCancelOrder'
import { EnumOrderStatus, IOrder } from '@/shared/interfaces/order.interface'
import { getTime } from '@/utils/time'
import { orderStatus } from './order-item.constant'
import OrderImage from './order-image/OrderImage'
import OrderStatus from './order-status/OrderStatus'
import { FaAngleDown } from 'react-icons/fa6'
import Text from '@/components/ui/heading/text/Text'
import OrderDetails from './order-details/OrderDetails'

const OrderItem: FC<{ item: IOrder }> = ({ item }) => {
	const [active, setActive] = useState<boolean>(false)

	const { cancelOrder, isLoading, error } = useCancelOrder()

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
					<OrderImage
						src={`/images/img/products/${item.product.image}`}
					/>
					<FaAngleDown />
				</div>
			</div>
			<div
				className={active ? `${s.dropdown} ${s.active}` : s.dropdown}
				onClick={e => e.stopPropagation()}
			>
				<OrderDetails item={item} />
			</div>
		</div>
	)
}

export default OrderItem
