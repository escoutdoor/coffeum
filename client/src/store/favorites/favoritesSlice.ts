import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IProductItem } from '@/shared/interfaces/product.interface'
import { IInitialState } from './favorites.initial'

const initialState: IInitialState = {
	items: [],
}

export const favoritesSlice = createSlice({
	name: 'favorites',
	initialState,
	reducers: {
		toggleFavorites: (
			state,
			action: PayloadAction<{ product: IProductItem }>
		) => {
			const { product } = action.payload

			const id = state.items.length.toString()

			const isExists = state.items.some(i => i.product.id === product.id)

			if (isExists) {
				const index = state.items.findIndex(
					item => item.product.id === product.id
				)
				if (index !== -1) {
					state.items.splice(index, 1)
				}
			} else {
				state.items.push({
					id,
					product,
					createdAt: new Date().toISOString(),
				})
			}
		},
	},
})
