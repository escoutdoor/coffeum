import { instance } from '@/api/api.interceptor'
import { IFilterSort } from '@/shared/interfaces/filter-data.interface'
import { IProfileData, IUser } from '@/shared/interfaces/user.interface'
import { TAdminModifyUser } from '@/lib/schemas/admin-modify-user.schema'

const USERS_URL = 'users'

export const UserService = {
	async getProfile() {
		return await instance<IUser>({
			method: 'GET',
			url: `${USERS_URL}/profile`,
		})
	},

	async updateProfile(data: IProfileData) {
		await instance<IUser>({
			method: 'PUT',
			url: `${USERS_URL}/profile`,
			data,
		})
	},

	async toggleFavorite(productId: string) {
		return await instance<IUser>({
			method: 'PATCH',
			url: `${USERS_URL}/profile/favorites/${productId}`,
		})
	},

	async getUsers(data: IFilterSort) {
		return await instance<IUser[]>({
			method: 'GET',
			url: `${USERS_URL}`,
			params: {
				...data,
			},
		})
	},

	async adminModifyUser(userId: string, data: TAdminModifyUser) {
		return await instance<IUser>({
			method: 'PUT',
			url: `${USERS_URL}/modify/${userId}`,
			data,
		})
	},
}
