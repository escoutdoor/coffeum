import axios from 'axios'
import {
	IProduct,
	IProductItem,
	IProductResponse,
	EnumProductType,
} from '@/shared/interfaces/product.interface'
import {
	IProductFilter,
	IFilterSort,
} from '@/shared/interfaces/filter-data.interface'
import { getString } from '@/utils/array-to-string'
import { defaultInstance, instance } from '@/api/api.interceptor'

const PRODUCTS_URL = 'products'

export const ProductService = {
	async getAll(type: EnumProductType, data: IProductFilter) {
		// return await defaultInstance<IProductResponse>(
		// 	`${PRODUCTS_URL}/type/${type}`,
		// 	{
		// 		params: {
		// 	limit: data.limit,
		// 	page: data.page,
		// 	minPrice: data.minPrice,
		// 	maxPrice: data.maxPrice,
		// 	sortBy: data.sortBy,
		// 	...(data.category && { category: data.category }),
		// 	...(data.brands?.length && {
		// 		brands: getString(data.brands),
		// 	}),
		// 	...(data.countries?.length && {
		// 		countries: getString(data.countries),
		// 	}),
		// 	...(data.availability?.length && {
		// 		availability: getString(data.availability),
		// 	}),
		// 	...(data.composition?.length && {
		// 		composition: getString(data.composition),
		// 	}),
		// 	...(data.packing?.length && {
		// 		packing: getString(data.packing),
		// 	}),
		// },
		// 	}
		// )

		return await defaultInstance<IProductResponse>({
			method: 'GET',
			url: `${PRODUCTS_URL}/type/${type}`,
			params: {
				limit: data.limit,
				page: data.page,
				minPrice: data.minPrice,
				maxPrice: data.maxPrice,
				sortBy: data.sortBy,
				...(data.category && { category: data.category }),
				...(data.brands?.length && {
					brands: getString(data.brands),
				}),
				...(data.countries?.length && {
					countries: getString(data.countries),
				}),
				...(data.availability?.length && {
					availability: getString(data.availability),
				}),
				...(data.composition?.length && {
					composition: getString(data.composition),
				}),
				...(data.packing?.length && {
					packing: getString(data.packing),
				}),
			},
		})
	},

	async getProductById(id: string) {
		return await defaultInstance<IProduct>(`${PRODUCTS_URL}/${id}`)
	},

	async getSimilarProducts(productId: string) {
		return await defaultInstance<IProductItem[]>(
			`${PRODUCTS_URL}/similar/${productId}`
		)
	},

	async getAllBrands() {
		return await defaultInstance(`${PRODUCTS_URL}/brands/getAll`)
	},

	async getProductsByBrand(brand: string, data: IProductFilter) {
		return await defaultInstance<IProductResponse>(
			`${PRODUCTS_URL}/byBrand/${brand}`,
			{
				params: {
					limit: data.limit,
					page: data.page,
					sortBy: data.sortBy,
				},
			}
		)
	},

	async getFoundProducts(data: IFilterSort) {
		return await defaultInstance<{ length: number; products: IProduct[] }>(
			`${PRODUCTS_URL}`,
			{
				params: {
					limit: data.limit,
					page: data.page,
					sortBy: data.sortBy,
					searchTerm: data.searchTerm,
				},
			}
		)
	},

	async createProduct(data: Omit<IProduct, 'id'>) {
		return await instance({
			method: 'POST',
			url: `${PRODUCTS_URL}`,
			data,
		})
	},

	async updateProduct(
		data: Omit<IProduct, 'id' | 'image'> & {
			image?: string
		},
		id: string
	) {
		return await instance({
			method: 'PUT',
			url: `${PRODUCTS_URL}/${id}`,
			data,
		})
	},
}
