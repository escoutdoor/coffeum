import ICartItem from '@/shared/interfaces/cart-item.interface'

export interface IInitialState {
	items: ICartItem[]
}

export interface ICartPayload extends Pick<ICartItem, 'product' | 'quantity'> {}
