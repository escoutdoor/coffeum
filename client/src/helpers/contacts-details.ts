import { IContactsDetailsItem } from '@/interfaces/contacts-details.interface'
import { TbShoppingCartDiscount } from 'react-icons/tb'
import { BiTimeFive } from 'react-icons/bi'

export const contactsDetails: IContactsDetailsItem[] = [
	{
		id: 1,
		title: 'Відділ продажів',
		Icon: TbShoppingCartDiscount,
		links: [
			{
				title: '+38 (050) 869-869-4',
				href: 'tel:+38 (050) 869-869-4',
			},
			{
				title: '+38 (050) 869-869-4',
				href: 'tel:+38 (050) 869-869-4',
			},
			{
				title: '+38 (050) 869-869-4',
				href: 'tel:+38 (050) 869-869-4',
			},
			{
				title: '+38 (050) 869-869-4',
				href: 'tel:+38 (050) 869-869-4',
			},
			{
				title: 'vanap387@gmail.com',
				href: 'mailto:vanap387@gmail.com',
			},
		],
	},
	{
		id: 2,
		title: 'Розклад роботи',
		Icon: BiTimeFive,
		text: [
			'Консультації та приймання замовлень за телефонами:',
			'Пн.-Пт. з 10:00 до 17:00 | Сб Нд – вихідні',
			'Самовивіз з офісу',
			'Пн.— Пт. с 10:00 до 17:00',
		],
	},
]
