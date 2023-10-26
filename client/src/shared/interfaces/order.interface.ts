import { IProductItem } from './product.interface'

export interface IOrder {
	id: string
	status: EnumOrderStatus
	items: IOrderItem[]
	userId: string
	createdAt: Date
}

export interface IOrderItem {
	id: string
	quantity: number
	product: IProductItem
}

export enum EnumOrderStatus {
	PENDING = 'pending',
	PAYED = 'payed',
	SHIPPED = 'shipped',
	DELIVERED = 'delivered',
}
