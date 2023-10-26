import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IInitialState } from './user.interface'
import { checkAuth, login, logout, register } from './user.actions'
import { getItemFromLocal } from '@/utils/getItemFromLocal'
import { IUser } from '@/shared/interfaces/user.interface'

const initialState: IInitialState = {
	user: getItemFromLocal('user'),
	isLoading: false,
}

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder
			.addCase(register.pending, state => {
				state.isLoading = true
			})
			.addCase(register.fulfilled, (state, { payload }) => {
				state.user = payload.user
				state.isLoading = false
			})
			.addCase(register.rejected, state => {
				state.isLoading = false
			})
			.addCase(login.pending, state => {
				state.isLoading = true
			})
			.addCase(login.fulfilled, (state, { payload }) => {
				state.user = payload.user
				state.isLoading = false
			})
			.addCase(login.rejected, state => {
				state.isLoading = false
				state.user = null
			})
			.addCase(logout.fulfilled, state => {
				state.user = null
				state.isLoading = false
			})
			.addCase(checkAuth.fulfilled, (state, { payload }) => {
				state.user = payload.user
			})
	},
})
