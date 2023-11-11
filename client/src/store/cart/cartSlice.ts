import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ICartPayload, IInitialState } from './cart.interface'
import { IQuantityCounterType } from '@/components/ui/quantity-counter/change-quantity.type'

const initialState: IInitialState = {
	items: [],
}

export const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addToCart: (state, action: PayloadAction<ICartPayload>) => {
			const id = state.items.length

			const isExists = state.items.some(
				i => i.product.id === action.payload.product.id
			)

			if (isExists) {
				const item = state.items.find(
					i => i.product.id === action.payload.product.id
				)
				item!.quantity += action.payload.quantity
			} else {
				state.items.push({
					product: action.payload.product,
					id: id,
					quantity: action.payload.quantity,
				})
			}
		},
		removeFromCart: (state, action: PayloadAction<{ id: number }>) => {
			const index = state.items.findIndex(
				item => item.id === action.payload.id
			)
			if (index !== -1) {
				state.items.splice(index, 1)
			}
		},
		changeQuantity: (
			state,
			action: PayloadAction<{ id: number; type: IQuantityCounterType }>
		) => {
			const { id, type } = action.payload

			const item = state.items.find(item => item.id === id)

			if (item) {
				if (type === 'plus') {
					item.quantity++
				} else {
					if (item.quantity > 1) {
						item.quantity--
					}
				}
			}
		},
		resetCart: state => {
			state.items = []
		},
	},
})
