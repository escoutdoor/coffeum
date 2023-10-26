export const split = (str: string) => {
	return str.split(',').map(item => item.trim())
}
