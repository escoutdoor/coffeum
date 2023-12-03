import s from './order-good.module.scss'
import { IOrderItem } from '@/shared/interfaces/order.interface'
import Link from 'next/link'
import Miniature from '@/components/ui/miniature/Miniature'
import SmallText from '@/components/ui/heading/small-text/SmallText'
import ProductLinkTitle from '@/components/ui/heading/product-link-title/ProductLinkTitle'

const OrderGood = ({ item }: { item: IOrderItem }) => {
	return (
		<div className={s.good}>
			<Miniature src={`/images/img/products/${item.product.image}`} />
			<div className={s.details}>
				<ProductLinkTitle
					href={{
						pathname: '/product/[id]',
						query: { id: item.product.id },
					}}
				>
					{item.product.name}
				</ProductLinkTitle>
				<SmallText>
					{item.quantity} × {item.product.discountedPrice} ₴
				</SmallText>
			</div>
		</div>
	)
}

export default OrderGood
