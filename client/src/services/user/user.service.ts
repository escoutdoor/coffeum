import { instance } from '@/api/api.interceptor'
import { IFilterSort } from '@/shared/interfaces/filter-data.interface'
import { IProfileData, IUser } from '@/shared/interfaces/user.interface'

export class UserService {
	private USERS_URL = '/api/users'

	async getProfile() {
		return await instance<IUser>({
			method: 'GET',
			url: `${this.USERS_URL}/profile`,
		})
	}

	async updateProfile(data: IProfileData) {
		await instance<IUser>({
			method: 'PUT',
			url: `${this.USERS_URL}/profile`,
			data,
		})
	}

	async toggleFavorite(productId: string) {
		return await instance<IUser>({
			method: 'PATCH',
			url: `${this.USERS_URL}/profile/favorites/${productId}`,
		})
	}

	async getUsers(data: IFilterSort) {
		return await instance<IUser[]>({
			method: 'GET',
			url: `${this.USERS_URL}`,
			params: {
				...data,
			},
		})
	}
}

export default new UserService()
