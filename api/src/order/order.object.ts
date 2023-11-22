import { returnProductFields } from 'src/product/product-fields.object'

export const returnOrderItemFields = {
	id: true,
	quantity: true,
	product: {
		select: {
			...returnProductFields,
			quantity: false,
			categories: false,
			reviews: false,
		},
	},
	order: {
		select: {
			id: true,
			status: true,
			description: true,
			createdAt: true,
			firstName: true,
			surName: true,
			phone: true,
			city: true,
			mailroom: true,
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
