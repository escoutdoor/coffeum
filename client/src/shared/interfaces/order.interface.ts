import { IProductItem } from './product.interface'

export interface IOrder {
	id: string
	status: EnumOrderStatus
	description?: string
	items: IOrderItem[]
	createdAt: Date
}

export interface IOrderItem {
	id: string
	quantity: number
	product: IOrderItemProduct
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

export interface ICreateOrder extends Pick<IOrder, 'status' | 'description'> {
	items: ICreateOrderItem[]
	recipient: IRecipient
}

export interface IRecipient {
	firstName: string
	surName: string
	phone: string
	address: IAddress
}

export interface IAddress {
	city: string
	mailroom: string
}
