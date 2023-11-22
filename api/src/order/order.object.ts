import { returnProductFields } from 'src/product/product-fields.object'

export const returnOrderItemFields = {
	id: true,
	quantity: true,
	product: {
		select: {
			...returnProductFields,
			quantity: false,
			categories: false,
		},
	},
}

export const returnOrderFields = {
	id: true,
	status: true,
	items: {
		select: returnOrderItemFields,
	},
	firstName: true,
	surName: true,
	phone: true,
	city: true,
	mailroom: true,
	createdAt: true,
}
