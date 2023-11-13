import { z } from 'zod'

export const recipientSchema = z.object({
	firstName: z
		.string()
		.max(20, {
			message: "Ім'я має містити не більше 20 символів",
		})
		.optional(),
	surName: z
		.string()
		.max(20, {
			message: 'Прізвище має містити не більше 20 символів',
		})
		.optional(),
	address: z.object({
		city: z.string().optional(),
		mailroom: z.string().optional(),
	}),
})
