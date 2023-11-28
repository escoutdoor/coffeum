import { IDashboardRoute } from '@/interfaces/dashboard-route.interface'
import { FiCoffee } from 'react-icons/fi'
import { BsPerson } from 'react-icons/bs'
import { BsHouseDoor } from 'react-icons/bs'

export const dashboardRoutes: IDashboardRoute[] = [
	{
		id: 1,
		title: 'Home',
		href: '',
		Icon: BsHouseDoor,
	},
	{
		id: 2,
		title: 'Products',
		href: '/products',
		Icon: FiCoffee,
	},
	{
		id: 3,
		title: 'Users',
		href: '/users',
		Icon: BsPerson,
	},
]
