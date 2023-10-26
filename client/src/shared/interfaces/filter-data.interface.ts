export interface IProductFilterData {
	limit: string
	page: string
	sortBy?: string
	category?: string
	minPrice?: string
	maxPrice?: string
	brands?: string
	countries?: string
	availability?: string
	composition?: string
	packing?: string
	reasonForMarkDown?: string
}

export interface IProductDetailsFilterData
	extends Omit<
		IProductFilterData,
		| 'brands'
		| 'countries'
		| 'availability'
		| 'composition'
		| 'packing'
		| 'reasonForMarkDown'
	> {
	brands?: string[]
	countries?: string[]
	availability?: string[]
	composition?: string[]
	packing?: string[]
	reasonForMarkDown?: string[]
}

export interface ISearchProducts
	extends Pick<IProductFilterData, 'limit' | 'page' | 'sortBy'> {
	searchTerm?: string
}
