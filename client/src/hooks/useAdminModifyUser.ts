import { TAdminModifyUser } from '@/lib/schemas/admin-modify-user.schema'
import { UserService } from '@/services/user/user.service'
import { useMutation, useQueryClient } from '@tanstack/react-query'

export const useAdminModifyUser = () => {
	const queryClient = useQueryClient()

	const {
		mutate: modifyUser,
		isLoading,
		error,
	} = useMutation({
		mutationKey: ['modify user'],
		mutationFn: async ({
			userId,
			data,
		}: {
			userId: string
			data: TAdminModifyUser
		}) => UserService.adminModifyUser(userId, data),
		onSuccess: () => {
			queryClient.invalidateQueries(['users'])
		},
	})

	return {
		modifyUser,
		isLoading,
		error,
	}
}
