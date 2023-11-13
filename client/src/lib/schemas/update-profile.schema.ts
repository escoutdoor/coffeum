import { z } from 'zod'

export const updateProfileSchema = z.object({
	firstName: z
		.string()
		.min(3, {
			message: "Ім'я має бути не менше 3 символів",
		})
		.max(20, {
			message: "Ім'я має бути не більше 20 символів",
		}),
	surName: z
		.string()
		.max(20, {
			message: 'Прізвище має бути не більше 20 символів',
		})
		.optional(),
	email: z.string().email({
		message: 'Введіть коректну адресу електронної пошти',
	}),
})
