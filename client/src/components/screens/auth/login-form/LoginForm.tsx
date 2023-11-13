import Field from '@/components/ui/field/Field'
import FormButton from '@/components/ui/form-button/FormButton'
import { useActions } from '@/hooks/useActions'
import { loginSchema } from '@/lib/schemas/login.schema'
import { ILoginInfo } from '@/shared/interfaces/user.interface'
import { zodResolver } from '@hookform/resolvers/zod'
import { FC } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

const LoginForm: FC = () => {
	const { login } = useActions()

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<ILoginInfo>({
		mode: 'onChange',
		resolver: zodResolver(loginSchema),
	})

	const onSubmit: SubmitHandler<ILoginInfo> = data => {
		login(data)
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<h1>Увійти</h1>
			<Field
				label="Aдреса електронної пошти"
				placeholder="Aдреса електронної пошти"
				{...register('email')}
				error={errors.email?.message}
				type="email"
				required
			/>
			<Field
				label="Пароль"
				placeholder="Пароль"
				{...register('password')}
				error={errors.password?.message}
				type="password"
				required
			/>
			<FormButton type="submit">Увійти</FormButton>
		</form>
	)
}

export default LoginForm
