import s from './address.module.scss'
import { FC } from 'react'
import AccountSectionHeading from '../account-section-heading/AccountSectionHeading'
import { SlLocationPin } from 'react-icons/sl'
import { SubmitHandler, useForm } from 'react-hook-form'
import { IProfileData } from '@/shared/interfaces/user.interface'
import { useUpdateProfile } from '@/hooks/useUpdateProfile'
import FormButton from '@/components/ui/form-button/FormButton'
import Field from '@/components/ui/field/Field'
import { useProfile } from '@/hooks/useProfile'
import { zodResolver } from '@hookform/resolvers/zod'
import { addressSchema } from '@/lib/schemas/address-schema'

const Address: FC = () => {
	const { profile } = useProfile()
	const { updateProfile } = useUpdateProfile()

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<IProfileData>({
		mode: 'onChange',
		defaultValues: {
			address: profile?.address,
		},
		resolver: zodResolver(addressSchema),
	})

	const onSubmit: SubmitHandler<IProfileData> = data => {
		if (profile) {
			updateProfile({ ...profile, address: data.address })
		}
	}

	return (
		<div>
			<AccountSectionHeading title="Адреса" Icon={SlLocationPin} />
			<div className={s.address}>
				<form onSubmit={handleSubmit(onSubmit)}>
					<div className={s.name}>
						<Field
							label="Ім'я"
							type="text"
							{...register('address')}
							placeholder="Введіть ім'я"
							error={errors.address?.message}
							required
						/>
					</div>
					<FormButton type="submit">Зберегти</FormButton>
				</form>
			</div>
		</div>
	)
}

export default Address
