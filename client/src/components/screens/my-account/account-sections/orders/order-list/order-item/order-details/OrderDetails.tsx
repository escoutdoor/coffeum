import s from './order-details.module.scss'
import { FC } from 'react'
import { EnumOrderStatus, IOrder } from '@/shared/interfaces/order.interface'
import { getAddress } from '@/utils/get-address'
import { getName } from '@/utils/get-name'
import Text from '@/components/ui/heading/text/Text'
import MiddleTitle from '@/components/ui/heading/middle-title/MiddleTitle'
import OrderGood from './order-good/OrderGood'
import FormButton from '@/components/ui/form-button/FormButton'
import { useCancelOrder } from '@/hooks/useCancelOrder'

const OrderDetails: FC<{ item: IOrder }> = ({ item }) => {
	const { cancelOrder, isLoading, error } = useCancelOrder()

	const isAvailableToCancel =
		item.order.status !== EnumOrderStatus.SHIPPED &&
		item.order.status !== EnumOrderStatus.DELIVERED

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
				<OrderGood item={item} />
				{isAvailableToCancel ? (
					<FormButton
						style={{
							margin: '30px 0 10px',
						}}
						onClick={() => cancelOrder(item.order.id)}
					>
						Скасувати замовлення
					</FormButton>
				) : null}
			</div>
		</div>
	)
}

export default OrderDetails
