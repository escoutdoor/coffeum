import { getName } from '@/utils/get-name'
import DashboardListItem from '../../dashboard-list-item/DashboardListItem'
import s from './user-list.module.scss'
import { IUser } from '@/shared/interfaces/user.interface'

const UserList = ({ users }: { users: IUser[] }) => {
	return (
		<ul className={s.list}>
			{users.map(user => (
				<DashboardListItem
					title={getName(user)}
					image={`/images/img/avatars/${user.avatarPath}`}
					key={user.id}
				>
					1
				</DashboardListItem>
			))}
		</ul>
	)
}

export default UserList
