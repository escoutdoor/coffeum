import { instance } from '@/api/api.interceptor'
import { ICreateOrder, IOrder } from '@/shared/interfaces/order.interface'

const ORDERS_URL = '/api/orders/'

export const OrderService = {
	async getOrders() {
		return await instance<IOrder[]>({
			method: 'GET',
			url: `${ORDERS_URL}`,
		})
	},

	async createOrder(data: ICreateOrder) {
		return await instance({
			method: 'POST',
			url: `${ORDERS_URL}`,
			data,
		})
	},

	async cancelOrder(orderId: string) {
		return await instance({
			method: 'DELETE',
			url: `${ORDERS_URL}${orderId}`,
		})
	},
}
