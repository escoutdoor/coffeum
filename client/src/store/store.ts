import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { cartSlice } from './cart/cartSlice'

import {
	persistReducer,
	persistStore,
	FLUSH,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
	REHYDRATE,
} from 'redux-persist'
import { favoritesSlice } from './favorites/favoritesSlice'
import { userSlice } from './user/userSlice'

import createWebStorage from 'redux-persist/lib/storage/createWebStorage'

const createNoopStorage = () => {
	return {
		getItem(_key: any) {
			return Promise.resolve(null)
		},
		setItem(_key: any, value: any) {
			return Promise.resolve(value)
		},
		removeItem(_key: any) {
			return Promise.resolve()
		},
	}
}

const storage =
	typeof window !== 'undefined'
		? createWebStorage('local')
		: createNoopStorage()

const persistConfig = {
	key: 'root',
	storage,
	whitelist: ['cart', 'favorites'],
}

const rootReducer = combineReducers({
	cart: cartSlice.reducer,
	favorites: favoritesSlice.reducer,
	user: userSlice.reducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
	reducer: persistedReducer,
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [
					FLUSH,
					REHYDRATE,
					PAUSE,
					PERSIST,
					PURGE,
					REGISTER,
				],
			},
		}),
})

export const persistor = persistStore(store)

export type TypeRootState = ReturnType<typeof rootReducer>
