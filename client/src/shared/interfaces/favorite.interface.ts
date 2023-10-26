import { IProductItem } from './product.interface'

export interface IFavorite {
	id: string
	product: IProductItem
	createdAt: Date | string
}
