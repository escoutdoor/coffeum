import { UserService } from '@/services/user/user.service'
import { IFilterSort } from '@/shared/interfaces/filter-data.interface'
import { useQuery } from '@tanstack/react-query'

export const useGetUsers = (data: IFilterSort) => {
	const {
		data: users,
		isLoading,
		error,
		refetch,
	} = useQuery({
		queryKey: ['users'],
		queryFn: async () => await UserService.getUsers(data),
		select: ({ data }) => data,
	})

	return {
		users,
		isLoading,
		error,
		refetch,
	}
}
