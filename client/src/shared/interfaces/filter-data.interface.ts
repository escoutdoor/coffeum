import { EnumSort } from '@/interfaces/sort.interface'

export interface IProductFilter extends IFilterSort {
	category?: string
	minPrice?: number
	maxPrice?: number
	brands?: string[]
	countries?: string[]
	availability?: string[]
	composition?: string[]
	packing?: string[]
}

export interface IFilterSort {
	limit: number
	page: number
	sortBy: EnumSort
	searchTerm?: string
}
