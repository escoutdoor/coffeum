interface IContactsDetailsItemLink {
	title: string
	href: string
}

export interface IContactsDetailsItem {
	id: number
	title: string
	Icon: string
	links?: IContactsDetailsItemLink[]
	text?: string[]
}
