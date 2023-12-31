import { ICreateUserInfo, ILoginInfo } from '@/shared/interfaces/user.interface'
import Cookies from 'js-cookie'
import axios from 'axios'
import { EnumTokens, saveToStorage } from './auth.helper'
import { getContentType } from '@/api/api.helper'
import { IAuthResponse } from '@/store/user/user.interface'
import { defaultInstance, instance } from '@/api/api.interceptor'

const AUTH_URL = 'auth'

export const AuthService = {
	async register(data: ICreateUserInfo) {
		const response = await instance<IAuthResponse>({
			method: 'POST',
			url: `${AUTH_URL}/register`,
			data,
		})

		if (response.data.accessToken) {
			saveToStorage(response.data)
		}

		return response.data
	},

	async login(data: ILoginInfo) {
		const response = await instance<string, { data: IAuthResponse }>({
			method: 'POST',
			url: `${AUTH_URL}/login`,
			data,
		})

		if (response.data.accessToken) {
			saveToStorage(response.data)
		}

		return response.data
	},

	async getNewTokens() {
		const refreshToken = Cookies.get(EnumTokens.REFRESH_TOKEN)

		const response = await defaultInstance<string, { data: IAuthResponse }>(
			{
				method: 'POST',
				url: `${AUTH_URL}/login/access-token`,
				data: { refreshToken },
				headers: getContentType(),
			}
		)

		if (response.data.accessToken) {
			saveToStorage(response.data)
		}

		return response.data
	},
}
