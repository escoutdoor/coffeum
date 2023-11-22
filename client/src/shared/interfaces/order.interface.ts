import { IProductItem } from './product.interface'

export interface IOrder {
	id: string
	quantity: number
	product: IOrderItemProduct
	order: IOrderData
}

export interface IOrderData {
	id: string
	status: EnumOrderStatus
	description: string
	firstName: string
	surName: string
	phone: string
	city: string
	mailroom: string
	createdAt: Date
}

export interface IOrderItemProduct
	extends Omit<IProductItem, 'quantity' | 'categories'> {}

export enum EnumOrderStatus {
	PENDING = 'PENDING',
	PAYED = 'PAYED',
	SHIPPED = 'SHIPPED',
	DELIVERED = 'DELIVERED',
}

export interface ICreateOrderItem {
	quantity: number
	productId: string
}

export interface ICreateOrder {
	status: EnumOrderStatus
	description?: string
	items: ICreateOrderItem[]
	firstName: string
	surName: string
	phone: string
	city: string
	mailroom: string
}
