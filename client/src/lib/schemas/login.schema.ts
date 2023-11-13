import { z } from 'zod'

export const loginSchema = z.object({
	email: z.string().email({
		message: 'Введіть коректну адресу електронної пошти',
	}),
	password: z.string().min(6, {
		message: 'Пароль має бути не менше 6 символів',
	}),
})
