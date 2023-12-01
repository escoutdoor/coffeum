export const orderProductFields = {
	id: true,
	name: true,
	discountedPrice: true,
	image: true,
}

export const orderItemFields = {
	id: true,
	quantity: true,
	product: {
		select: orderProductFields,
	},
}

export const orderFields = {
	id: true,
	status: true,
	description: true,
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
