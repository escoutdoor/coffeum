import { EnumSort } from '@/interfaces/sort.interface'
import { ISidebarData } from '@/shared/interfaces/sidebar.interface'
import { useSearchParams } from 'next/navigation'

export const useGetFilterParams = (data?: ISidebarData) => {
	const { get, getAll } = useSearchParams()

	const query = get('q') || ''

	const view = get('view') || 'grid'
	const sortBy = get('sortBy') || 'popularity'
	const limit = +(get('limit') || 12)
	const page = +(get('page') || 1)
	const category = get('category') || ''

	const maxPrice = get('max') || data?.initialMaxPrice || 0
	const minPrice = get('min') || data?.initialMinPrice || 0

	const brands = getAll('brands') || ''
	const countries = getAll('countries') || ''
	const availability = getAll('availability') || []

	const composition = getAll('composition') || ''
	const packing = getAll('packing') || ''

	return {
		view,
		sortBy: sortBy as EnumSort,
		limit,
		page,
		category,
		minPrice: +minPrice,
		maxPrice: +maxPrice,
		brands,
		countries,
		availability,
		composition,
		packing,
		query,
	}
}
