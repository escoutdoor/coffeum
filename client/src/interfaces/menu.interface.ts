import { INavItem } from '@/helpers/navbar'

export interface IMenu {
	id: number
	title: string
	link: string
	subcategories: IMenuItem[]
}

export interface IMenuItem {
	id: number
	title: string
	list: INavItem[]
}
