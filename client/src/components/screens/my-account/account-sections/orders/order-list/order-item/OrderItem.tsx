import s from './order-item.module.scss'
import { FC, useState } from 'react'
import { IOrder } from '@/shared/interfaces/order.interface'
import { FaAngleDown } from 'react-icons/fa6'
import Text from '@/components/ui/heading/text/Text'
import Miniature from '@/components/ui/miniature/Miniature'
import { getTotalPrice } from '@/utils/get-total-price'
import OrderDetails from '../order-details/OrderDetails'
import SmallText from '@/components/ui/heading/small-text/SmallText'
import OrderStatus from '@/components/ui/order-status/OrderStatus'

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
					<SmallText>Сума</SmallText>
					<Text>{total} ₴</Text>
				</div>
				<div className={s.right}>
					<div className={s.miniatures}>
						<Miniature
							src={`/images/img/products/${item.items[0].product.image}`}
						/>
					</div>
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
