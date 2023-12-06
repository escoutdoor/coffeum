import { UserService } from '@/services/user/user.service'
import { useQuery } from '@tanstack/react-query'
import { useAuth } from './useAuth'
import { EnumRole } from '@/shared/interfaces/user.interface'

export const useProfile = () => {
	const { user } = useAuth()

	const {
		data: profile,
		isLoading,
		isError,
		error,
	} = useQuery({
		queryKey: ['profile', user?.id],
		queryFn: () => UserService.getProfile(),
		select: ({ data }) => data,
		enabled: !!user,
	})

	return {
		profile,
		isLoading,
		isError,
		error,
		isAdmin: profile?.role === EnumRole.ADMIN,
	}
}
