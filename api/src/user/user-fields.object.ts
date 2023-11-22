import { returnProductFields } from 'src/product/product-fields.object'

export const returnFavoriteFields = {
	id: true,
	product: {
		select: returnProductFields,
	},
}

export const returnRecipientFields = {
	id: true,
	firstName: true,
	surName: true,
	phone: true,
	city: true,
	mailroom: true,
}

export const returnUserFields = {
	id: true,
	email: true,
	avatarPath: true,
	firstName: true,
	surName: true,
	password: false,
	recipient: {
		select: returnRecipientFields,
	},
	favorites: {
		select: returnFavoriteFields,
	},
}
