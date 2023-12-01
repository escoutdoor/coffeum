import { zodResolver } from '@hookform/resolvers/zod'
import s from './dashboard-user-modify.module.scss'
import { EnumRole, IUser } from '@/shared/interfaces/user.interface'
import {
	TAdminModifyUser,
	adminModifyUserSchema,
} from '@/lib/schemas/admin-modify-user.schema'
import { useForm, SubmitHandler } from 'react-hook-form'
import { useAdminModifyUser } from '@/hooks/useAdminModifyUser'
import Field from '@/components/ui/field/Field'
import FormButton from '@/components/ui/form-button/FormButton'
import RoleSelector from './role-selector/RoleSelector'

const DashboardUserModify = ({ profile }: { profile: IUser }) => {
	const { modifyUser } = useAdminModifyUser()

	const {
		register,
		handleSubmit,
		formState: { errors, isValid },
		control,
	} = useForm<TAdminModifyUser>({
		values: {
			...profile,
		},
		mode: 'onChange',
		resolver: zodResolver(adminModifyUserSchema),
	})

	const onSubmit: SubmitHandler<TAdminModifyUser> = data => {
		modifyUser({
			data,
			userId: profile.id,
		})
	}

	return (
		<div className={s.modify}>
			<form onSubmit={handleSubmit(onSubmit)}>
				<Field
					{...register('firstName')}
					label="Ім'я"
					error={errors.firstName?.message}
					required
				/>
				<Field
					{...register('surName')}
					label="Прізвище"
					error={errors.surName?.message}
				/>
				<RoleSelector control={control} error={errors.role?.message} />

				<FormButton disabled={!isValid}>Зберегти</FormButton>
			</form>
		</div>
	)
}

export default DashboardUserModify
