import { z } from 'zod'

export const productSchema = z.object({
	name: z.string().min(3, {
		message: 'Назва продукту має містити не менше 3 символів',
	}),
	description: z.string().min(3, {
		message: 'Опис продукту має містити не менше 3 символів',
	}),
	packing: z.string().optional(),
	discountedPrice: z
		.number({
			required_error: 'Мінімальная ціна зі знижкою - 0 грн',
			invalid_type_error:
				'Введіть мінімальну ціну зі знижкою для цього товару (число)',
		})
		.min(0, {
			message: 'Мінімальная ціна зі знижкою - 0 грн',
		}),
	originalPrice: z
		.number({
			required_error: 'Мінімальна ціна - 1 грн',
			invalid_type_error:
				'Введіть мінімальну ціну для цього товару (число)',
		})
		.min(1, {
			message: 'Мінімальна ціна - 1 грн',
		}),
	brand: z.string().min(3, {
		message: 'Назва бренду має містити не менше 3 символів',
	}),
	quantity: z
		.number({
			required_error: 'Мінімальная кількість - 0',
			invalid_type_error: 'Введіть кількість (число)',
		})
		.min(0, {
			message: 'Мінімальна кількість - 0',
		}),
})

export type TProductSchema = z.infer<typeof productSchema>
