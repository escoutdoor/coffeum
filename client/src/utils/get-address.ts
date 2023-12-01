import { IOrder } from '@/shared/interfaces/order.interface'

export const getAddress = (order: IOrder): string => {
	return `${order.city}, ${order.mailroom}`
}
