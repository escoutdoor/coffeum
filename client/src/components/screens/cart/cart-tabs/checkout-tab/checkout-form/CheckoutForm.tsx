import s from './checkout-form.module.scss'
import { SubmitHandler, useForm } from 'react-hook-form'
import { FC } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { TPaymentSchema, paymentSchema } from '@/lib/schemas/payment-schema'
<<<<<<< HEAD
import Field from '@/components/ui/field/Field'
import TextArea from '@/components/ui/text-area/TextArea'
import { useProfile } from '@/hooks/useProfile'
=======
import { useProfile } from '@/hooks/useProfile'
import Field from '@/components/ui/field/Field'
>>>>>>> 5159a9b674539dc2e2001b7e508ac086cc645379

const CheckoutForm: FC = () => {
	const { profile } = useProfile()

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<TPaymentSchema>({
		mode: 'onChange',
		resolver: zodResolver(paymentSchema),
<<<<<<< HEAD
=======
		defaultValues: {
			firstName: profile?.firstName || '',
			surName: profile?.surName || '',
			email: profile?.email || '',
		},
>>>>>>> 5159a9b674539dc2e2001b7e508ac086cc645379
	})

	const onSumbit: SubmitHandler<TPaymentSchema> = data => {}

	return (
		<form onSubmit={handleSubmit(onSumbit)}>
			<Field
				{...register('phone')}
				label="Телефон"
				placeholder="Телефон"
				type="tel"
				error={errors.phone?.message}
				required
			/>
			<Field
				{...register('email')}
				label="Адреса електронної пошти"
				placeholder="Адреса електронної пошти"
				type="email"
				error={errors.email?.message}
				required
			/>
			<div className={s.centered}>
				<Field
					{...register('firstName')}
					label="Ім'я"
					placeholder="Ім'я"
					type="text"
					error={errors.firstName?.message}
					required
				/>
				<Field
					{...register('surName')}
					label="Прізвище "
					placeholder="Прізвище "
					type="text"
					error={errors.surName?.message}
					required
				/>
			</div>
<<<<<<< HEAD
			<TextArea
				{...register('comments')}
				label="Примітки до замовлень (необов'язково)"
				placeholder="Нотатки до вашого замовлення, наприклад спеціальні примітки для доставки."
				error={errors.comments?.message}
			/>
=======
>>>>>>> 5159a9b674539dc2e2001b7e508ac086cc645379
		</form>
	)
}

export default CheckoutForm
