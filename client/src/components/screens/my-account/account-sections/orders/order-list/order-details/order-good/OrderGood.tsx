import s from './order-good.module.scss'
import { IOrderItem } from '@/shared/interfaces/order.interface'
import Link from 'next/link'
import Miniature from '@/components/ui/miniature/Miniature'

const OrderGood = ({ item }: { item: IOrderItem }) => {
	return (
		<div className={s.good}>
			<Miniature src={`/images/img/products/${item.product.image}`} />
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
