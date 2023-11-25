import { useCallback } from 'react'
import { useRouter } from 'next/router'
import { useSearchParams } from 'next/navigation'

export const useQueryParams = () => {
	const router = useRouter()
	const searchParams = useSearchParams()

	const updateQueryParam = useCallback(
		({
			name,
			value,
			isArray,
		}: {
			name: string
			value: string
			isArray?: boolean
		}) => {
			const params = new URLSearchParams(searchParams)
			let newQueryString = ''
			let newUrl = ''

			if (isArray) {
				const array = searchParams.getAll(name)

				const isExists = array.some(i => i === value)

				if (isExists) {
					const indexToRemove = array.indexOf(value)
					array.splice(indexToRemove, 1)
					params.delete(name)
					array.forEach(item => params.append(name, item))
				} else {
					params.append(name, value)
				}
			} else {
				if (value) {
					params.set(name, value)
				} else {
					params.delete(name)
				}
			}

			newQueryString = params.toString()
			newUrl = `${router.pathname}${
				newQueryString ? `?${newQueryString}` : ''
			}`

			router.push(newUrl, undefined, { shallow: true, scroll: false })
		},
		[searchParams, router]
	)

	return updateQueryParam
}
