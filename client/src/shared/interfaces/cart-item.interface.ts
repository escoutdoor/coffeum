import { IProductItem } from './product.interface'

export default interface ICartItem {
	id: number
	quantity: number
	addedToCart?: Date
	product: IProductItem
}
