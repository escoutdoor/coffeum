import { IOrderItem } from '@/shared/interfaces/order.interface'

export const getTotalPrice = (items: IOrderItem[]) => {
	return items.reduce((acc, item) => {
		return acc + item.quantity * item.product.discountedPrice
	}, 0)
}
