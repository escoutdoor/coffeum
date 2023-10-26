import { ISidebarData } from '@/shared/interfaces/sidebar.interface'
import { useSearchParams } from 'next/navigation'

export const useGetFilterParams = (data?: ISidebarData) => {
	const { get, getAll } = useSearchParams()

	const query = get('q') || ''

	const view = get('view') || 'grid'
	const sortBy = get('sortBy') || 'popularity'
	const limit = (get('limit') || 12) as string
	const page = (get('page') || 1) as string
	const category = get('category') || ''

	const maxPrice = get('max') || data?.initialMaxPrice.toString() || ''
	const minPrice = get('min') || data?.initialMinPrice.toString() || ''

	const brands = getAll('brands') || ''
	const countries = getAll('countries') || ''
	const availability = getAll('availability') || []
	const reasonsForMarkDown = getAll('reasons-markdown') || []

	const composition = getAll('composition') || ''
	const packing = getAll('packing') || ''

	return {
		view,
		sortBy,
		limit,
		page,
		category,
		minPrice,
		maxPrice,
		brands,
		countries,
		availability,
		reasonsForMarkDown,
		composition,
		packing,
		query,
	}
}
