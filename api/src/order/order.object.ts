import { productFields } from 'src/product/product.object'

export const orderItemFields = {
	id: true,
	quantity: true,
	product: {
		select: {
			...productFields,
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

export const orderFields = {
	id: true,
	status: true,
	items: {
		select: orderItemFields,
	},
	firstName: true,
	surName: true,
	phone: true,
	city: true,
	mailroom: true,
	createdAt: true,
}
