import { IPaymentSectionItem } from '@/interfaces/payment-section.interface'
import { FiCheckCircle } from 'react-icons/fi'
import { LuFileLock2 } from 'react-icons/lu'
import { PiNotebook } from 'react-icons/pi'
import { MdPayment } from 'react-icons/md'

export const paymentTypes: IPaymentSectionItem[] = [
	{
		id: 1,
		title: 'Готівкою',
		text: 'При отриманні замовлення у кур’єра',
		Icon: FiCheckCircle,
	},
	{
		id: 2,
		title: 'Післяплатою',
		text: 'Оплата при отриманні замовлення в вашому місті на складі служби доставки (Нова пошта)',
		Icon: LuFileLock2,
	},
	{
		id: 3,
		title: 'Рахунок-фактура',
		Icon: PiNotebook,
	},
	{
		id: 4,
		title: 'Рахунок-фактура',
		Icon: MdPayment,
	},
]
