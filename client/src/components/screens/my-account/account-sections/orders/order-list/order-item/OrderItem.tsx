import s from './order-item.module.scss'
import { FC, useState } from 'react'
import { IOrder } from '@/shared/interfaces/order.interface'
import { FaAngleDown } from 'react-icons/fa6'
import Text from '@/components/ui/heading/text/Text'
import Miniature from '@/components/ui/miniature/Miniature'
import { getTotalPrice } from '@/utils/get-total-price'
import OrderStatus from '../order-status/OrderStatus'
import OrderDetails from '../order-details/OrderDetails'

const OrderItem: FC<{ item: IOrder }> = ({ item }) => {
	const [active, setActive] = useState<boolean>(false)

	const total = getTotalPrice(item.items)

	return (
		<div
			className={active ? `${s.item} ${s.active}` : s.item}
			onClick={() => setActive(!active)}
		>
			<div className={s.preview}>
				<OrderStatus status={item.status} createdAt={item.createdAt} />
				<div className={s.price}>
					<p className={s.text}>Сума</p>
					<Text>{total} ₴</Text>
				</div>
				<div className={s.right}>
					<Miniature
						src={`/images/img/products/${item.items[0].product.image}`}
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
