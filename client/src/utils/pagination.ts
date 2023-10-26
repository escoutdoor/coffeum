export const getPages = (length: number, limit: number) => {
	const totalPages = Math.ceil(length / limit)
	return Array.from({ length: totalPages }, (_, i) => i + 1)
}
