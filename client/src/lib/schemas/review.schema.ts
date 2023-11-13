import { z } from 'zod'

export const reviewSchema = z.object({
	text: z
		.string()
		.min(3, {
			message: 'Відгук має містити не менше 3 символів',
		})
		.max(1000),
	rating: z
		.number({
			required_error: 'Будь ласка, оцініть товар',
		})
		.min(1, {
			message: 'Будь ласка, оцініть товар',
		})
		.max(5),
})

export type TReview = z.infer<typeof reviewSchema>
