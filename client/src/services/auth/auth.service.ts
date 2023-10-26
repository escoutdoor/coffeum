import { ICreateUserInfo, ILoginInfo } from '@/shared/interfaces/user.interface'
import Cookies from 'js-cookie'
import axios from 'axios'
import { EnumTokens, saveToStorage } from './auth.helper'
import { getContentType } from '@/api/api.helper'
import { IAuthResponse } from '@/store/user/user.interface'
import { instance } from '@/api/api.interceptor'

export class AuthService {
	private AUTH_URL = '/api/auth'

	async register(data: ICreateUserInfo) {
		const response = await instance<IAuthResponse>({
			method: 'POST',
			url: `${this.AUTH_URL}/register`,
			data,
		})

		if (response.data.accessToken) {
			saveToStorage(response.data)
		}

		return response.data
	}

	async login(data: ILoginInfo) {
		const response = await instance<string, { data: IAuthResponse }>({
			method: 'POST',
			url: `${this.AUTH_URL}/login`,
			data,
		})

		if (response.data.accessToken) {
			saveToStorage(response.data)
		}

		return response.data
	}

	async getNewTokens() {
		const refreshToken = Cookies.get(EnumTokens.REFRESHTOKEN)

		const response = await axios.post<string, { data: IAuthResponse }>(
			`${this.AUTH_URL}/login/access-token`,
			{ refreshToken },
			{ headers: getContentType() }
		)

		if (response.data.accessToken) {
			saveToStorage(response.data)
		}

		return response.data
	}
}

export default new AuthService()
