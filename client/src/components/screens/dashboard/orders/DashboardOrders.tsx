import s from './dashboard-orders.module.scss'
import { NextPage } from 'next'
import { IOrder } from '@/shared/interfaces/order.interface'
import DashboardLayout from '../layout/DashboardLayout'
import SectionTitle from '@/components/ui/heading/section-title/SectionTitle'
import DashboardOrderList from './dashboard-order-list/DashboardOrderList'
import SearchInput from '@/components/ui/search-input/SearchInput'
import { useGetFilterParams } from '@/hooks/useGetFilterParams'
import { useQueryParams } from '@/hooks/useQueryParams'

const DashboardOrders: NextPage<{ orders: IOrder[] }> = ({ orders }) => {
	const { query } = useGetFilterParams()

	const updateQuery = useQueryParams()

	return (
		<DashboardLayout title="Замовлення">
			<div className={s.orders}>
				<SectionTitle
					style={{
						marginBottom: '3rem',
						textAlign: 'center',
					}}
				>
					Замовлення
				</SectionTitle>

				<SearchInput
					label="Пошук замовлення"
					placeholder="Введіть номер замовлення, ім'я або телефон"
					onChange={e =>
						updateQuery({ name: 'q', value: e.target.value })
					}
					value={query}
					style={{
						marginBottom: '3rem',
					}}
				/>

				<DashboardOrderList orders={orders} />
			</div>
		</DashboardLayout>
	)
}

export default DashboardOrders
