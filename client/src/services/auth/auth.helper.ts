import { IAuthResponse, ITokens } from '@/store/user/user.interface'
import Cookies from 'js-cookie'

export const getAccessToken = () => {
	const accessToken = Cookies.get(EnumTokens.ACCESSTOKEN)
	return accessToken || null
}

export const getUserFromStorage = () => {
	return JSON.parse(localStorage.getItem('user') || '{}')
}

export const saveTokensStorage = (data: ITokens) => {
	Cookies.set(EnumTokens.ACCESSTOKEN, data.accessToken)
	Cookies.set(EnumTokens.REFRESHTOKEN, data.refreshToken)
}

export const removeFromStorage = () => {
	Cookies.remove(EnumTokens.ACCESSTOKEN)
	Cookies.remove(EnumTokens.REFRESHTOKEN)
	localStorage.removeItem('user')
}

export const saveToStorage = (data: IAuthResponse) => {
	saveTokensStorage(data)
	localStorage.setItem('user', JSON.stringify(data.user))
}

export enum EnumTokens {
	ACCESSTOKEN = 'accessToken',
	REFRESHTOKEN = 'refreshToken',
}
