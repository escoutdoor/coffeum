
export interface IOrder extends IRecipient {
	id: string
	quantity: number
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

export interface IOrderItemProduct {
	id: string
	name: string
	discountedPrice: number
	image: string
}

export interface IRecipient {
	firstName: string
	surName: string
	phone: string
	city: string
	mailroom: string
}

// create order items

export interface ICreateOrder extends IRecipient {
	status: EnumOrderStatus
	items: ICreateOrderItem[]
	description?: string
}

export interface ICreateOrderItem {
	quantity: number
	productId: string
}

// order status

export enum EnumOrderStatus {
	PENDING = 'PENDING',
	PAYED = 'PAYED',
	SHIPPED = 'SHIPPED',
	DELIVERED = 'DELIVERED',
}
