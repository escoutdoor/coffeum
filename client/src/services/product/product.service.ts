import axios from 'axios'
import {
	IProduct,
	IProductItem,
	IProductResponse,
	ProductType,
} from '@/shared/interfaces/product.interface'
import {
	IProductFilter,
	IFilterSort,
} from '@/shared/interfaces/filter-data.interface'
import { getString } from '@/utils/array-to-string'

class ProductService {
	private PRODUCTS_URL = '/api/products/'

	async getAll(type: ProductType, data: IProductFilter) {
		return await axios.get<IProductResponse>(
			`${this.PRODUCTS_URL}type/${type}`,
			{
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
			}
		)
	}

	async getProductById(id: string) {
		return await axios.get<IProduct>(`${this.PRODUCTS_URL}${id}`)
	}

	async getSimilarProducts(productId: string) {
		return await axios.get<IProductItem[]>(
			`${this.PRODUCTS_URL}similar/${productId}`
		)
	}

	async getAllBrands() {
		return await axios.get(`${this.PRODUCTS_URL}/brands/getAll`)
	}

	async getProductsByBrand(brand: string, data: IProductFilter) {
		return await axios.get<IProductResponse>(
			`${this.PRODUCTS_URL}/byBrand/${brand}`,
			{
				params: {
					limit: data.limit,
					page: data.page,
					sortBy: data.sortBy,
				},
			}
		)
	}

	async getFoundProducts(data: IFilterSort) {
		return await axios.get<IProductResponse>(`${this.PRODUCTS_URL}`, {
			params: {
				limit: data.limit,
				page: data.page,
				sortBy: data.sortBy,
				searchTerm: data.searchTerm,
			},
		})
	}
}

export default new ProductService()
