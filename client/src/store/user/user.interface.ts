import { IUser, IUserIdEmail } from '@/shared/interfaces/user.interface'

export interface IInitialState {
	user: IUserIdEmail | null
	isLoading: boolean
}

export interface ITokens {
	accessToken: string
	refreshToken: string
}

export interface IAuthResponse extends ITokens {
	user: IUser
}
