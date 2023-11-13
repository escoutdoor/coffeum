export const returnAddressFields = {
	city: true,
	mailroom: true,
}

export const returnRecipientFields = {
	firstName: true,
	surName: true,
	phone: true,
	address: {
		select: returnAddressFields,
	},
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
}
