import { reviewFields } from 'src/review/review.object'

export const productFields = {
	id: true,
	name: true,
	description: true,
	type: true,
	discountedPrice: true,
	originalPrice: true,
	country: true,
	brand: true,
	quantity: true,
	categories: true,
	image: true,
	packing: true,
	composition: true,
	reviews: {
		select: reviewFields,
	},
}
