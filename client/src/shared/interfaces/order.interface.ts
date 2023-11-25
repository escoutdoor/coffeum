import { IProductItem } from './product.interface'

export interface IOrder {
	id: string
	quantity: number
	product: IOrderItemProduct
	order: IOrderData
}

export interface IOrderItemProduct
	extends Omit<IProductItem, 'quantity' | 'categories'> {}

export interface IRecipient {
	firstName: string
	surName: string
	phone: string
	city: string
	mailroom: string
}

export interface IOrderData extends IRecipient {
	id: string
	status: EnumOrderStatus
	description: string
	createdAt: Date
}

export interface ICreateOrder extends IRecipient {
	status: EnumOrderStatus
	items: ICreateOrderItem[]
	description?: string
}

export interface ICreateOrderItem {
	quantity: number
	productId: string
}

export enum EnumOrderStatus {
	PENDING = 'PENDING',
	PAYED = 'PAYED',
	SHIPPED = 'SHIPPED',
	DELIVERED = 'DELIVERED',
}
