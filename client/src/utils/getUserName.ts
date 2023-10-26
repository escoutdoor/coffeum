import { IUser } from '@/shared/interfaces/user.interface'

export const getUserName = (user?: IUser) => {
	return user
		? `${user.firstName}${user.surName ? ` ${user.surName}` : ''}`
		: ''
}
