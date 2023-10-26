import {
	IProductDetailsFilterData,
	IProductFilterData,
} from '@/shared/interfaces/filter-data.interface'

export const getString = (array: string[] | undefined) => {
	if (array) {
		return array.join(',')
	} else {
		return
	}
}

export const getFilters = (data: IProductDetailsFilterData) => {
	const {
		brands,
		countries,
		availability,
		reasonForMarkDown,
		composition,
		packing,
	} = data

	return {
		...data,
		brands: getString(brands),
		countries: getString(countries),
		availability: getString(availability),
		reasonForMarkDown: getString(reasonForMarkDown),
		composition: getString(composition),
		packing: getString(packing),
	}
}
