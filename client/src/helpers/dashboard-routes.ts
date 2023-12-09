import { IDashboardRoute } from '@/interfaces/dashboard-route.interface'
import { FiCoffee } from 'react-icons/fi'
import { BsPerson } from 'react-icons/bs'
import { BsHouseDoor } from 'react-icons/bs'
import { MdOutlineDeliveryDining } from 'react-icons/md'
import { GrMoney } from 'react-icons/gr'
import { IoExitOutline } from 'react-icons/io5'

export const dashboardRoutes: IDashboardRoute[] = [
	{
		id: 1,
		title: 'Панель адміністратора',
		href: '/dashboard',
		Icon: BsHouseDoor,
	},
	{
		id: 2,
		title: 'Продукти',
		href: '/dashboard/products',
		Icon: FiCoffee,
	},
	{
		id: 3,
		title: 'Користувачі',
		href: '/dashboard/users',
		Icon: BsPerson,
	},
	{
		id: 4,
		title: 'Замовлення',
		href: '/dashboard/orders',
		Icon: MdOutlineDeliveryDining,
	},
	{
		id: 5,
		title: 'Акції',
		href: '/dashboard/promotions',
		Icon: GrMoney,
	},
	{
		id: 6,
		title: 'Вихід',
		href: '/',
		Icon: IoExitOutline,
	},
]
