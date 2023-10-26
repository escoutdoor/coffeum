import { z } from 'zod'

export const changePasswordSchema = z
	.object({
		password: z
			.string()
			.min(6, { message: 'Пароль не може бути менше 6 символів' }),
		newPassword: z
			.string()
			.min(6, { message: 'Пароль має бути не менше 6 символів' }),
		confirmNewPassword: z
			.string()
			.min(6, { message: 'Пароль має бути не менше 6 символів' }),
	})
	.refine(data => data.newPassword === data.confirmNewPassword, {
		message: 'Паролі не співпадають',
		path: ['confirmNewPassword'],
	})

export type TChangePasswordSchema = z.infer<typeof changePasswordSchema>
