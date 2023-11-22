import s from './order-details.module.scss'
import { FC } from 'react'
import { IOrder } from '@/shared/interfaces/order.interface'
import Text from '@/components/ui/heading/text/Text'
import { getAddress } from '@/utils/get-address'
import { getName } from '@/utils/get-name'
import MiddleTitle from '@/components/ui/heading/middle-title/MiddleTitle'
import OrderImage from '../order-image/OrderImage'
import Link from 'next/link'

const OrderDetails: FC<{ item: IOrder }> = ({ item }) => {
	return (
		<div className={s.details}>
			<div className={s.left}>
				<MiddleTitle>Інформація про замовлення</MiddleTitle>

				<Text>Одержувач</Text>
				<p className={s.text}>{getName({ ...item.order })}</p>
				<Text>Адреса</Text>
				<p className={s.text}>{getAddress(item)}</p>
				<Text>Телефон</Text>
				<p className={s.text}>{item.order.phone}</p>
			</div>
			<div className={s.right}>
				<MiddleTitle>Товар</MiddleTitle>
				<div className={s.good}>
					<OrderImage
						src={`/images/img/products/${item.product.image}`}
					/>
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
			</div>
		</div>
	)
}

export default OrderDetails
