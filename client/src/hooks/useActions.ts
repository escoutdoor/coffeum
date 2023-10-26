import { cartSlice } from '@/store/cart/cartSlice'
import { favoritesSlice } from '@/store/favorites/favoritesSlice'
import { bindActionCreators } from '@reduxjs/toolkit'
import * as userActions from '@/store/user/user.actions'
import { useDispatch } from 'react-redux'
import { useMemo } from 'react'

const rootActions = {
	...cartSlice.actions,
	...favoritesSlice.actions,
	...userActions,
}

export const useActions = () => {
	const dispatch = useDispatch()

	return useMemo(() => bindActionCreators(rootActions, dispatch), [dispatch])
}
