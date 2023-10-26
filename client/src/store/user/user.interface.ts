import { IUser } from '@/shared/interfaces/user.interface'

export interface IInitialState {
	user: IUser | null
	isLoading: boolean
}

export interface ITokens {
	accessToken: string
	refreshToken: string
}

export interface IAuthResponse extends ITokens {
	user: IUser
}
