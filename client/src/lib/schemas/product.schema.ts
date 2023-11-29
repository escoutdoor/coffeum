import { z } from 'zod'

export const productSchema = z.object({
	name: z.string().min(3, {
		message: 'Назва продукту має містити не менше 3 символів',
	}),
	description: z.string().min(3, {
		message: 'Опис продукту має містити не менше 3 символів',
	}),
	type: z
		.string({
			required_error: "Тип продукту є обов'язковим полем",
			invalid_type_error: 'Введіть тип продукту (рядок)',
		})
		.min(3, {
			message: 'Мінімальная довжина типу продукту - 3 символи',
		}),
	discountedPrice: z.coerce
		.number({
			required_error: 'Введіть мінімальну ціну товара зі знижкою',
			invalid_type_error:
				'Введіть мінімальну ціну зі знижкою для цього товару (число)',
		})
		.min(0, {
			message: 'Мінімальная ціна зі знижкою - 0 грн',
		}),
	originalPrice: z.coerce
		.number({
			required_error: 'Введіть мінімальну ціну товара',
			invalid_type_error:
				'Введіть мінімальну ціну для цього товару (число)',
		})
		.min(1, {
			message: 'Мінімальна ціна - 1 грн',
		}),
	country: z
		.string({
			required_error: "Країна виробника є обов'язковим полем",
		})
		.min(3, {
			message: 'Мінімальная довжина країни - 3 символи',
		}),
	packing: z.string().optional(),
	brand: z.string().min(3, {
		message: 'Назва бренду має містити не менше 3 символів',
	}),
	quantity: z.coerce
		.number({
			required_error: 'Мінімальная кількість - 0',
			invalid_type_error: 'Введіть кількість (число)',
		})
		.min(0, {
			message: 'Мінімальна кількість - 0',
		}),
	categories: z
		.string({
			required_error: "Категорії є обов'язковим полем",
		})
		.min(3, {
			message: 'Мінімальная довжина категорії - 3 символи',
		}),
	composition: z
		.string({
			invalid_type_error: 'Склад має бути рядком',
		})
		.optional(),
})

export type TProductSchema = z.infer<typeof productSchema>
