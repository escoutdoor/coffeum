export const reviewFields = {
	id: true,
	rating: true,
	text: true,
	createdAt: true,
	author: {
		select: {
			id: true,
			email: true,
			firstName: true,
			surName: true,
			avatarPath: true,
		},
	},
}
