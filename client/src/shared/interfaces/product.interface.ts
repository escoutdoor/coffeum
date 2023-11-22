import { IUser } from './user.interface'

export interface IReview {
	id: number
	author: IUser
	authorId: string
	rating: number
	text: string
	createdAt: Date | string
}

export interface IProduct {
	id: string
	image: string
	name: string
	categories: string[]
	discountedPrice: number
	originalPrice: number
	brand: string
	quantity: number
	description: string
	packing?: string
	type: ProductType
	country: string
	composition?: string[]
	reviews?: IReview[]
}

export interface IProductItem
	extends Omit<
		IProduct,
		'description' | 'packing' | 'type' | 'country' | 'composition'
	> {}

export enum ProductType {
	COFFEE = 'coffee',
	TEA = 'tea',
	MARKDOWN = 'markdown',
	ACCESSORIES = 'accessories',
	COCOA_CHOCOLATE = 'cocoa-chocolate',
	COFFEE_MACHINES = 'coffee-machines',
}

export interface IProductResponse {
	products: IProductItem[]
	length: number
}
