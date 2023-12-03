import s from './dashboard-order-modify.module.scss'
import { EnumOrderStatus, IOrder } from '@/shared/interfaces/order.interface'
import { useCancelOrder } from '@/hooks/useCancelOrder'
import FormButton from '@/components/ui/form-button/FormButton'
import OrderGood from '@/components/ui/order-good/OrderGood'
import MiddleTitle from '@/components/ui/heading/middle-title/MiddleTitle'

const DashboardOrderModify = ({ order }: { order: IOrder }) => {
	const { cancelOrder, isLoading, error } = useCancelOrder()

	const isAvailableToCancel =
		order.status !== EnumOrderStatus.SHIPPED &&
		order.status !== EnumOrderStatus.DELIVERED

	return (
		<div className={s.order__modify}>
			<div className={s.right}>
				<div className={s.goods}>
					<MiddleTitle>Товар</MiddleTitle>
					{order.items.map(good => (
						<OrderGood key={good.id} item={good} />
					))}
				</div>
				{isAvailableToCancel ? (
					<FormButton
						style={{
							margin: '30px 0 10px',
						}}
						onClick={() => cancelOrder(order.id)}
					>
						Скасувати замовлення
					</FormButton>
				) : null}
			</div>
		</div>
	)
}

export default DashboardOrderModify
