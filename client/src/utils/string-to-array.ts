export const getArrayFromString = (string?: string) => {
	if (string) {
		return string.split(',').map(item => item.trim())
	} else {
		return
	}
}
