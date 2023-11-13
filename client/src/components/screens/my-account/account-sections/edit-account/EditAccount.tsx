import s from './edit-account.module.scss'
import { FC } from 'react'
import AccountSectionHeading from '../account-section-heading/AccountSectionHeading'
import { BiUser } from 'react-icons/bi'
import FormButton from '@/components/ui/form-button/FormButton'
import { SubmitHandler, useForm } from 'react-hook-form'
import { IProfileData } from '@/shared/interfaces/user.interface'
import Field from '@/components/ui/field/Field'
import { useUpdateProfile } from '@/hooks/useUpdateProfile'
import { useProfile } from '@/hooks/useProfile'
import { updateProfileSchema } from '@/lib/schemas/update-profile.schema'
import { zodResolver } from '@hookform/resolvers/zod'
import ChangePasswordForm from './change-password-form/ChangePasswordForm'

const EditAccount: FC = () => {
	const { profile } = useProfile()
	const { updateProfile } = useUpdateProfile()

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<IProfileData>({
		mode: 'onChange',
		resolver: zodResolver(updateProfileSchema),
		defaultValues: {
			firstName: profile?.firstName,
			surName: profile?.surName,
			email: profile?.email,
		},
	})

	const onSumbit: SubmitHandler<IProfileData> = data => {
		updateProfile(data)
	}

	return (
		<div>
			<AccountSectionHeading title="Профіль" Icon={BiUser} />
			<div className={s.edit}>
				<form onSubmit={handleSubmit(onSumbit)}>
					<div className={s.username}>
						<Field
							label="Ім'я"
							placeholder="Ім'я користувача"
							{...register('firstName')}
							type="text"
							required
							error={errors.firstName?.message}
						/>
						<Field
							label="Прізвище"
							placeholder="Прізвище користувача"
							{...register('surName')}
							type="text"
							error={errors.surName?.message}
						/>
					</div>
					<Field
						label="Aдреса електронної пошти"
						placeholder="Aдреса електронної пошти"
						{...register('email')}
						error={errors.email?.message}
						type="email"
						required
					/>
					<FormButton type="submit">Зберегти зміни</FormButton>
				</form>
				<ChangePasswordForm />
			</div>
		</div>
	)
}

export default EditAccount
