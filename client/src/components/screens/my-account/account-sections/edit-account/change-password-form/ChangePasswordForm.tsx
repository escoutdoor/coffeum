import { Form, SubmitHandler, useForm } from 'react-hook-form'
import s from './change-password-form.module.scss'
import { FC } from 'react'
import { useUpdateProfile } from '@/hooks/useUpdateProfile'
import Field from '@/components/ui/field/Field'
import { useProfile } from '@/hooks/useProfile'
import {
	TChangePasswordSchema,
	changePasswordSchema,
} from '@/lib/schemas/change-password.schema'
import { zodResolver } from '@hookform/resolvers/zod'
import FormButton from '@/components/ui/form-button/FormButton'

const ChangePasswordForm: FC = () => {
	const { profile } = useProfile()
	const { updateProfile } = useUpdateProfile()

	const {
		register,
		reset,
		handleSubmit,
		formState: { errors },
	} = useForm<TChangePasswordSchema>({
		mode: 'onChange',
		resolver: zodResolver(changePasswordSchema),
	})

	const onSubmit: SubmitHandler<TChangePasswordSchema> = data => {
		if (profile) {
			updateProfile({ ...profile, password: data.newPassword })

			reset()
		}
	}

	return (
		<div className={s.change__password}>
			<h3>Змінити пароль</h3>
			<form onSubmit={handleSubmit(onSubmit)}>
				<Field
					label="Поточний пароль (залиште поле порожнім, щоб залишити його без змін)"
					type="password"
					placeholder="Поточний пароль"
					{...register('password')}
					error={errors.password?.message}
				/>
				<Field
					label="Новий пароль (залиште поле порожнім, щоб залишити його без змін)"
					type="password"
					placeholder="Новий пароль"
					{...register('newPassword')}
					error={errors.newPassword?.message}
				/>
				<Field
					label="Підтвердіть новий пароль"
					type="password"
					placeholder="Підтвердження нового паролю"
					{...register('confirmNewPassword')}
					error={errors.confirmNewPassword?.message}
				/>
				<FormButton type="submit">Зберегти зміни</FormButton>
			</form>
		</div>
	)
}

export default ChangePasswordForm
