import { productFields } from 'src/product/product.object'

export const favoriteFields = {
	id: true,
	product: {
		select: productFields,
	},
}

export const recipientFields = {
	id: true,
	firstName: true,
	surName: true,
	phone: true,
	city: true,
	mailroom: true,
}

export const userFields = {
	id: true,
	email: true,
	avatarPath: true,
	firstName: true,
	surName: true,
	recipient: {
		select: recipientFields,
	},
	favorites: {
		select: favoriteFields,
	},
}
