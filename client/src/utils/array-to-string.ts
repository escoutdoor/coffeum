export const getString = (array?: string[] | undefined) => {
	if (array) {
		return array.join(',')
	} else {
		return
	}
}
