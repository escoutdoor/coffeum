import { UserService } from '@/services/user/user.service'
import { IProfileData } from '@/shared/interfaces/user.interface'
import { useMutation } from '@tanstack/react-query'

export const useUpdateProfile = () => {
	const { mutate } = useMutation(
		['update profile'],
		async (data: IProfileData) => UserService.updateProfile(data)
	)

	return { updateProfile: mutate }
}
