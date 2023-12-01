import { getName } from '@/utils/get-name'
import DashboardListItem from '../../dashboard-list-item/DashboardListItem'
import s from './user-list.module.scss'
import { IUser } from '@/shared/interfaces/user.interface'
import DashboardUserModify from './dashboard-user-modify/DashboardUserModify'

const UserList = ({ users }: { users: IUser[] }) => {
	return (
		<ul className={s.list}>
			{users.map(user => (
				<DashboardListItem
					key={user.id}
					title={getName(user)}
					image={`/images/img/avatars/${user.avatarPath}`}
				>
					<DashboardUserModify profile={user} />
				</DashboardListItem>
			))}
		</ul>
	)
}

export default UserList
