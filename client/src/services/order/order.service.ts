import { instance } from '@/api/api.interceptor'
import { IOrder } from '@/shared/interfaces/order.interface'

class OrderService {
	private ORDERS_URL = '/api/orders/'

	async getOrders() {
		return await instance<IOrder[]>({
			method: 'GET',
			url: `${this.ORDERS_URL}`,
		})
	}
}

export default new OrderService()
