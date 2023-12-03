import { IFavorite } from './favorite.interface'
import { IRecipient } from './order.interface'

export interface IUser extends IUserIdEmail {
	avatarPath: string
	firstName: string
	surName?: string
	recipient?: IRecipient
	favorites: IFavorite[]
	role: EnumRole
}

export interface IUserIdEmail {
	id: string
	email: string
}

export enum EnumRole {
	ADMIN = 'ADMIN',
	USER = 'USER',
}

export interface ICreateUserInfo extends Pick<IUser, 'email' | 'firstName'> {
	password: string
}

export interface ILoginInfo extends Pick<IUser, 'email'> {
	password: string
}

export interface IProfileData
	extends Omit<IUser, 'id' | 'favorites' | 'reviews'> {
	password?: string
}
