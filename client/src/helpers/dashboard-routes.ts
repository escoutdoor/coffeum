import { IDashboardRoute } from '@/interfaces/dashboard-route.interface'
import { FiCoffee } from 'react-icons/fi'
import { BsPerson } from 'react-icons/bs'
import { BsHouseDoor } from 'react-icons/bs'
import { MdOutlineDeliveryDining } from 'react-icons/md'

export const dashboardRoutes: IDashboardRoute[] = [
	{
		id: 1,
		title: 'Панель адміністратора',
		href: '',
		Icon: BsHouseDoor,
	},
	{
		id: 2,
		title: 'Продукти',
		href: '/products',
		Icon: FiCoffee,
	},
	{
		id: 3,
		title: 'Користувачі',
		href: '/users',
		Icon: BsPerson,
	},
	{
		id: 4,
		title: 'Замовлення',
		href: '/orders',
		Icon: MdOutlineDeliveryDining,
	},
]
