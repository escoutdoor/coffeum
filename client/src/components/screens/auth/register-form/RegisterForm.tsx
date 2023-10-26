import Field from '@/components/ui/field/Field'
import FormButton from '@/components/ui/form-button/FormButton'
import { useActions } from '@/hooks/useActions'
import { registerSchema } from '@/lib/schemas/register-schema'
import { ICreateUserInfo } from '@/shared/interfaces/user.interface'
import { zodResolver } from '@hookform/resolvers/zod'
import { FC } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

const RegisterForm: FC = () => {
	const { register } = useActions()

	const {
		register: formRegister,
		handleSubmit,
		formState: { errors },
	} = useForm<ICreateUserInfo>({
		mode: 'onChange',
		resolver: zodResolver(registerSchema),
	})

	const onSubmit: SubmitHandler<ICreateUserInfo> = data => {
		register(data)
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<h1>Реєстрація</h1>
			<Field
				label="Aдреса електронної пошти"
				placeholder="Aдреса електронної пошти"
				{...formRegister('email')}
				error={errors.email?.message}
				type="email"
				required
			/>
			<Field
				label="Пароль"
				placeholder="Пароль"
				{...formRegister('password')}
				error={errors.password?.message}
				type="password"
				required
			/>
			<Field
				label="Ім'я користувача"
				placeholder="Ім'я користувача"
				{...formRegister('firstName')}
				error={errors.firstName?.message}
				required
				type="text"
			/>
			<FormButton type="submit">Реєстрація</FormButton>
		</form>
	)
}

export default RegisterForm
