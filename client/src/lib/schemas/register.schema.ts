import { z } from 'zod'

export const registerSchema = z.object({
	email: z.string().email({
		message: 'Введіть коректну адресу електронної пошти',
	}),
	password: z.string().min(6, {
		message: 'Пароль має бути не менше 6 символів',
	}),
	firstName: z
		.string()
		.min(3, {
			message: "Ім'я має бути не менше 3 символів",
		})
		.max(20, {
			message: "Ім'я має бути не більше 20 символів",
		}),
})
