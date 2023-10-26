import { z } from 'zod'

export const paymentSchema = z.object({
	phone: z.string().min(10, {
		message: 'Номер телефону має містити 10 цифр',
	}),
	email: z.string().email({
		message: 'Введіть коректну адресу електронної пошти',
	}),
	firstName: z.string().min(3, {
		message: "Ім'я має містити не менше 3 символів",
	}),
	surName: z.string().min(3, {
		message: 'Прізвище має містити не менше 3 символів',
	}),
	comments: z.string().optional(),
})

export type TPaymentSchema = z.infer<typeof paymentSchema>
