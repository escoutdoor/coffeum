import userService from '@/services/user/user.service'
import { useQuery } from '@tanstack/react-query'
import { useAuth } from './useAuth'

export const useProfile = () => {
	const { user } = useAuth()

	const { data } = useQuery(
		['profile', user?.id],
		() => userService.getProfile(),
		{
			select: ({ data }) => data,
			enabled: !!user,
		}
	)

	return { profile: data }
}
