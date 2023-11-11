import { z } from 'zod'

export const orderSchema = z.object({
	description: z.string().optional(),
	recipient: z.object({
		firstName: z.string().min(3, {
			message: "Ім'я має містити не менше 3 символів",
		}),
		surName: z.string().min(3, {
			message: 'Прізвище має містити не менше 3 символів',
		}),
		phone: z.string().min(13, {
			message: 'Номер телефону має містити 13 цифр',
		}),
		address: z.object({
			city: z.string().min(3, {
				message: 'Назва міста має містити не менше 3 символів',
			}),
			mailroom: z.string().min(3, {
				message: 'Назва відділення має містити не менше 3 символів',
			}),
		}),
	}),
})

export type TOrderSchema = z.infer<typeof orderSchema>
