import s from './address.module.scss'
import { FC } from 'react'
import AccountSectionHeading from '../account-section-heading/AccountSectionHeading'
import { SlLocationPin } from 'react-icons/sl'
import { SubmitHandler, useForm } from 'react-hook-form'
import { IProfileData, IRecipient } from '@/shared/interfaces/user.interface'
import { useUpdateProfile } from '@/hooks/useUpdateProfile'
import FormButton from '@/components/ui/form-button/FormButton'
import Field from '@/components/ui/field/Field'
import { useProfile } from '@/hooks/useProfile'
import { zodResolver } from '@hookform/resolvers/zod'
import { recipientSchema } from '@/lib/schemas/recipient.schema'
import MiddleTitle from '@/components/ui/heading/middle-title/MiddleTitle'

const Address: FC = () => {
	const { profile } = useProfile()
	const { updateProfile } = useUpdateProfile()

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<IRecipient>({
		mode: 'onChange',
		defaultValues: {
			...profile?.recipient,
		},
		resolver: zodResolver(recipientSchema),
	})

	const onSubmit: SubmitHandler<IRecipient> = data => {
		if (profile) {
			updateProfile({ ...profile, recipient: data })
		}
	}

	return (
		<div>
			<AccountSectionHeading title="Адреса" Icon={SlLocationPin} />
			<div className={s.address}>
				<form onSubmit={handleSubmit(onSubmit)}>
					<MiddleTitle
						style={{
							margin: '20px 0',
						}}
					>
						Одержувач
					</MiddleTitle>
					<div className={s.name}>
						<Field
							label="Ім'я"
							type="text"
							{...register('firstName')}
							placeholder="Введіть ім'я"
							error={errors.firstName?.message}
							required
						/>
						<Field
							label="Прізвище"
							type="text"
							{...register('surName')}
							placeholder="Прізвище"
							error={errors.surName?.message}
							required
						/>
					</div>
					<Field
						label="Номер телефону"
						type="text"
						{...register('phone')}
						placeholder="Номер телефону"
						error={errors.phone?.message}
						required
					/>
					<MiddleTitle
						style={{
							margin: '20px 0',
						}}
					>
						Адреса доставки
					</MiddleTitle>
					<Field
						label="Місто одержувача"
						type="text"
						{...register('address.city')}
						placeholder="Місто одержувача"
						error={errors.address?.city?.message}
						required
					/>
					<Field
						label="Поштове відділення"
						type="text"
						{...register('address.mailroom')}
						placeholder="Поштове відділення"
						error={errors.address?.mailroom?.message}
						required
					/>
					<FormButton type="submit">Зберегти</FormButton>
				</form>
			</div>
		</div>
	)
}

export default Address
