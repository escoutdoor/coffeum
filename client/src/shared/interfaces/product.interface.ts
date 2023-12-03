import { IUser } from './user.interface'

export interface IReview {
	id: number
	author: IAuthor
	rating: number
	text: string
	createdAt: Date | string
}

export interface IAuthor
	extends Omit<IUser, 'reviews' | 'favorites' | 'recipient'> {}

export interface IProductItem {
	id: string
	image: string
	name: string
	categories: string[]
	discountedPrice: number
	originalPrice: number
	brand: string
	quantity: number
	reviews?: IReview[]
}

export interface IProduct extends IProductItem {
	description: string
	packing?: string
	type: EnumProductType
	country: string
	composition?: string[]
}

export interface IProductResponse {
	products: IProductItem[]
	length: number
}

export enum EnumProductType {
	COFFEE = 'coffee',
	TEA = 'tea',
	MARKDOWN = 'markdown',
	ACCESSORIES = 'accessories',
	COCOA_CHOCOLATE = 'cocoa-chocolate',
	COFFEE_MACHINES = 'coffee-machines',
}
