import Link from 'next/link'
import OrderImage from '../../order-image/OrderImage'
import s from './order-good.module.scss'
import { IOrder } from '@/shared/interfaces/order.interface'

const OrderGood = ({ item }: { item: IOrder }) => {
	return (
		<div className={s.good}>
			<OrderImage src={`/images/img/products/${item.product.image}`} />
			<div className={s.details}>
				<Link
					href={{
						pathname: '/product/[id]',
						query: { id: item.product.id },
					}}
				>
					{item.product.name}
				</Link>
				<p>
					{item.quantity} × {item.product.discountedPrice} ₴
				</p>
			</div>
		</div>
	)
}

export default OrderGood
