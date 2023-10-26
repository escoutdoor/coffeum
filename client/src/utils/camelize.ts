export const camelize = (str: string): string => {
	return str
		?.replace(/(?:^\w|[A-Z]|\b\w)/g, (word, index) =>
			index === 0 ? word.toLowerCase() : word.toUpperCase()
		)
		?.replace(/\s+/g, '')
		?.replace(/-/g, '')
		?.replace(/_/g, '')
}
