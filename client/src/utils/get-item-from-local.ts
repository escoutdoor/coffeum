export const getItemFromLocal = (name: string) => {
	if (typeof window === 'undefined') {
		return null
	}

	return localStorage.getItem(name)
		? JSON.parse(localStorage.getItem(name) as string)
		: null
}
