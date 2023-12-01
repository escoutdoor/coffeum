import s from './orders.module.scss'
import { FC } from 'react'
import { useRouter } from 'next/router'
import { SlSocialDropbox } from 'react-icons/sl'
import { useOrders } from '@/hooks/useOrders'
import DarkButton from '@/components/ui/dark-button/DarkButton'
import AccountSectionHeading from '../account-section-heading/AccountSectionHeading'
import Loading from '@/components/ui/loading/Loading'
import Text from '@/components/ui/heading/text/Text'
import OrderList from './order-list/OrderList'

const Orders: FC = () => {
	const { push } = useRouter()
	const { orders, isLoading } = useOrders()

	return (
		<div className={s.orders}>
			<AccountSectionHeading title="Замовлення" Icon={SlSocialDropbox} />
			{isLoading ? (
				<Loading />
			) : orders?.length ? (
				<OrderList orders={orders || []} />
			) : (
				<Text>У вас немає замовлень</Text>
			)}
			<div>
				<DarkButton
					onClick={() => push('/search-products')}
					style={{
						marginTop: '40px',
					}}
				>
					в магазин
				</DarkButton>
			</div>
		</div>
	)
}

export default Orders
