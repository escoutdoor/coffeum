import { instance } from '@/api/api.interceptor'
import { ICreateOrder, IOrder } from '@/shared/interfaces/order.interface'

class OrderService {
	private ORDERS_URL = '/api/orders/'

	async getOrders() {
		return await instance<IOrder[]>({
			method: 'GET',
			url: `${this.ORDERS_URL}`,
		})
	}

	async createOrder(data: ICreateOrder) {
		return await instance({
			method: 'POST',
			url: `${this.ORDERS_URL}`,
			data,
		})
	}

	async cancelOrder(orderId: string) {
		return await instance({
			method: 'DELETE',
			url: `${this.ORDERS_URL}${orderId}`,
		})
	}
}

export default new OrderService()
