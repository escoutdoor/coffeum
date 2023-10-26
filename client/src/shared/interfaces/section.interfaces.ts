export interface ISection {
	id: number
	title: string
	text: string[]
	list?: string[]
	conclusions?: string[]
}

export interface ICatalog {
	title: string
	sections: ISection[]
}
