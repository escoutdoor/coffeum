import s from './checkout-form.module.scss'
import { SubmitHandler, useForm } from 'react-hook-form'
import { FC } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { TPaymentSchema, paymentSchema } from '@/lib/schemas/payment-schema'
import Field from '@/components/ui/field/Field'
import TextArea from '@/components/ui/text-area/TextArea'
import { useProfile } from '@/hooks/useProfile'

const CheckoutForm: FC = () => {
	const { profile } = useProfile()

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<TPaymentSchema>({
		mode: 'onChange',
		resolver: zodResolver(paymentSchema),
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
			<TextArea
				{...register('comments')}
				label="Примітки до замовлень (необов'язково)"
				placeholder="Нотатки до вашого замовлення, наприклад спеціальні примітки для доставки."
				error={errors.comments?.message}
			/>
		</form>
	)
}

export default CheckoutForm
