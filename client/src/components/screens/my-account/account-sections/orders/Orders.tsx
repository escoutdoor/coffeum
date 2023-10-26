import DarkButton from '@/components/ui/dark-button/DarkButton'
import AccountSectionHeading from '../account-section-heading/AccountSectionHeading'
import s from './orders.module.scss'
import { FC } from 'react'
import { SlSocialDropbox } from 'react-icons/sl'
import { useRouter } from 'next/router'
import Table from '@/components/ui/table/Table'

interface IOrders {}

const Orders: FC<IOrders> = ({}) => {
	const { push } = useRouter()

	return (
		<div className={s.orders}>
			<AccountSectionHeading title="Замовлення" Icon={SlSocialDropbox} />
			<DarkButton onClick={() => push('/search-products')}>
				в магазин
			</DarkButton>
			<Table
				items={['Замовлення', 'Дата', 'Статус', 'Загалом', 'Дії']}
			></Table>
		</div>
	)
}

export default Orders
