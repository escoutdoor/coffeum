import { SlSocialDropbox, SlLocationPin } from 'react-icons/sl'
import { BiUser } from 'react-icons/bi'
import { FiHeart } from 'react-icons/fi'
import {
	IAccountNavigationBox,
	IAccountSidebarItem,
} from '@/interfaces/profile-navigation.interface'

export const navigationProfile: IAccountNavigationBox[] = [
	{
		title: 'Замовлення',
		Icon: SlSocialDropbox,
		href: '/my-account?section=orders',
	},
	{
		title: 'Адреса',
		Icon: SlLocationPin,
		href: '/my-account?section=address',
	},
	{
		title: 'Профіль',
		Icon: BiUser,
		href: '/my-account?section=edit-account',
	},
	{
		title: 'Закладки',
		Icon: FiHeart,
		href: '/favorites',
	},
]

export const navigationProfileSidebar: IAccountSidebarItem[] = [
	{
		title: 'Майстерня',
		href: '/my-account',
	},
	{
		title: 'Замовлення',
		href: '/my-account?section=orders',
	},
	{
		title: 'Адреса',
		href: '/my-account?section=address',
	},
	{
		title: 'Профіль',
		href: '/my-account?section=edit-account',
	},
	{
		title: 'Закладки',
		href: '/favorites',
	},
]
