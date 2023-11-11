import s from './checkout-form.module.scss'
import { SubmitHandler, useForm } from 'react-hook-form'
import { FC } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import Field from '@/components/ui/field/Field'
import TextArea from '@/components/ui/text-area/TextArea'
import { TOrderSchema, orderSchema } from '@/lib/schemas/order.schema'
import { useCreateOrder } from '@/hooks/useCreateOrder'
import DarkButton from '@/components/ui/dark-button/DarkButton'

const CheckoutForm: FC = () => {
	const { createOrder } = useCreateOrder()

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<TOrderSchema>({
		mode: 'onChange',
		resolver: zodResolver(orderSchema),
	})

	const onSubmit: SubmitHandler<TOrderSchema> = data => {
		createOrder(data)
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<Field
				{...register('recipient.phone')}
				prefix="+380"
				label="Телефон"
				placeholder="Телефон"
				type="tel"
				error={errors.recipient?.phone?.message}
				required
			/>
			<div className={s.centered}>
				<Field
					{...register('recipient.firstName')}
					label="Ім'я"
					placeholder="Ім'я"
					type="text"
					error={errors.recipient?.firstName?.message}
					required
				/>
				<Field
					{...register('recipient.surName')}
					label="Прізвище "
					placeholder="Прізвище "
					type="text"
					error={errors.recipient?.surName?.message}
					required
				/>
			</div>
			<Field
				{...register('recipient.address.city')}
				label="Доставка в"
				placeholder="Місто"
				type="text"
				error={errors.recipient?.address?.city?.message}
				required
			/>
			<Field
				{...register('recipient.address.mailroom')}
				label="Відділення"
				placeholder="Відділення"
				type="text"
				error={errors.recipient?.address?.mailroom?.message}
				required
			/>
			<TextArea
				{...register('description')}
				label="Примітки до замовлень (необов'язково)"
				placeholder="Нотатки до вашого замовлення, наприклад спеціальні примітки для доставки."
				error={errors.description?.message}
			/>
			<DarkButton
				type="submit"
				style={{
					marginTop: '20px',
					width: '100%',
				}}
			>
				Підтвердити замовлення
			</DarkButton>
		</form>
	)
}

export default CheckoutForm
