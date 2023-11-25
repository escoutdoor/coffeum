export interface IAccountNavigationBox {
	title: string
	Icon: string
	href?: string
	onClick?: () => void
}

export interface IAccountSidebarItem
	extends Omit<IAccountNavigationBox, 'Icon'> {}
