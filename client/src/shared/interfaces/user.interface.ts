import { IFavorite } from './favorite.interface'
import { IReview } from './product.interface'

export interface IUser {
	id: string
	firstName: string
	surName?: string
	email: string
	address?: string
	reviews?: IReview[]
	favorites: IFavorite[]
	avatarPath: string
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
