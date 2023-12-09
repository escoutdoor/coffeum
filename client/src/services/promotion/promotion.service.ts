import { defaultInstance, instance } from '@/api/api.interceptor'
import { IPromotionItem } from '@/interfaces/promotion-item.interface'

const PROMOTIONS_URL = '/promotions'

export const PromotionService = {
	async getAll() {
		const promotions = await defaultInstance<IPromotionItem[]>({
			method: 'GET',
			url: `${PROMOTIONS_URL}`,
		})

		return promotions
	},

	async getById(id: string) {
		const promotion = await defaultInstance<IPromotionItem>({
			method: 'GET',
			url: `${PROMOTIONS_URL}/${id}`,
		})

		return promotion
	},

	async create(promotion: any) {
		await instance({
			method: 'POST',
			url: `${PROMOTIONS_URL}`,
			data: promotion,
		})
	},

	async update(promotion: any) {
		await instance({
			method: 'PUT',
			url: `${PROMOTIONS_URL}/${promotion.id}`,
			data: promotion,
		})
	},

	async delete(id: string) {
		await instance({
			method: 'DELETE',
			url: `${PROMOTIONS_URL}/${id}`,
		})
	},
}
