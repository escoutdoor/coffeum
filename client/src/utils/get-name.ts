export const getName = ({
	firstName,
	surName,
}: {
	firstName?: string
	surName?: string
}) => {
	return `${firstName}${surName ? ` ${surName}` : ''}`
}
