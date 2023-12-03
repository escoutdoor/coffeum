import s from './order-details.module.scss'
import { FC } from 'react'
import { useCancelOrder } from '@/hooks/useCancelOrder'
import { EnumOrderStatus, IOrder } from '@/shared/interfaces/order.interface'
import { getAddress } from '@/utils/get-address'
import { getName } from '@/utils/get-name'
import Text from '@/components/ui/heading/text/Text'
import MiddleTitle from '@/components/ui/heading/middle-title/MiddleTitle'
import FormButton from '@/components/ui/form-button/FormButton'
import OrderGood from '@/components/ui/order-good/OrderGood'

const OrderDetails: FC<{ item: IOrder }> = ({ item }) => {
	const { cancelOrder, isLoading, error } = useCancelOrder()

	const isAvailableToCancel =
		item.status !== EnumOrderStatus.SHIPPED &&
		item.status !== EnumOrderStatus.DELIVERED

	return (
		<div className={s.details}>
			<div className={s.left}>
				<MiddleTitle>Інформація про замовлення</MiddleTitle>

				<Text>Одержувач</Text>
				<p className={s.text}>{getName({ ...item })}</p>
				<Text>Адреса</Text>
				<p className={s.text}>{getAddress(item)}</p>
				<Text>Телефон</Text>
				<p className={s.text}>{item.phone}</p>
			</div>
			<div className={s.right}>
				<MiddleTitle>Товар</MiddleTitle>
				<div className={s.goods}>
					{item.items.map(item => (
						<OrderGood key={item.id} item={item} />
					))}
				</div>
				{isAvailableToCancel ? (
					<FormButton
						style={{
							margin: '30px 0 10px',
						}}
						onClick={() => cancelOrder(item.id)}
					>
						Скасувати замовлення
					</FormButton>
				) : null}
			</div>
		</div>
	)
}

export default OrderDetails
