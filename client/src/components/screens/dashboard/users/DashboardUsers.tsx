import s from './dashboard-users.module.scss'
import { IUser } from '@/shared/interfaces/user.interface'
import { useQueryParams } from '@/hooks/useQueryParams'
import { useGetFilterParams } from '@/hooks/useGetFilterParams'
import SectionTitle from '@/components/ui/heading/section-title/SectionTitle'
import DashboardLayout from '../layout/DashboardLayout'
import UserList from './user-list/UserList'
import SearchInput from '@/components/ui/search-input/SearchInput'

const DashboardUsers = ({ users }: { users: IUser[] }) => {
	const updateQueryParam = useQueryParams()
	const { query } = useGetFilterParams()

	return (
		<DashboardLayout title="Користувачі">
			<div className={s.users}>
				<SectionTitle
					style={{
						textAlign: 'center',
						margin: '3rem 0',
					}}
				>
					Користувачі
				</SectionTitle>

				<SearchInput
					placeholder="Пошук користувача"
					value={query}
					onChange={e =>
						updateQueryParam({
							name: 'q',
							value: e.target.value,
						})
					}
					style={{
						marginBottom: '3rem',
					}}
				/>

				<UserList users={users} />
			</div>
		</DashboardLayout>
	)
}

export default DashboardUsers
