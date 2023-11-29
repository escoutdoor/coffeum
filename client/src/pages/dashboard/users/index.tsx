import DashboardUsers from '@/components/screens/dashboard/users/DashboardUsers'
import { useDebounce } from '@/hooks/useDebounce'
import { useGetFilterParams } from '@/hooks/useGetFilterParams'
import { useGetUsers } from '@/hooks/useGetUsers'
import { EnumSort } from '@/interfaces/sort.interface'
import { useEffect } from 'react'

export default function DashboardUsersPage() {
	const { query } = useGetFilterParams()

	const searchTerm = useDebounce(query, 500)

	const { users, isLoading, error, refetch } = useGetUsers({
		limit: 10,
		page: 1,
		searchTerm,
		sortBy: EnumSort.NEWEST,
	})

	useEffect(() => {
		refetch()
	}, [searchTerm])

	return <DashboardUsers users={users || []} />
}
