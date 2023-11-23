import axios from 'axios'
import {
	IProduct,
	IProductItem,
	IProductResponse,
	ProductType,
} from '@/shared/interfaces/product.interface'
import {
	IProductFilterData,
	ISearchProducts,
} from '@/shared/interfaces/filter-data.interface'

class ProductService {
	private PRODUCTS_URL = '/api/products/'

	async getAll(type: ProductType, data: IProductFilterData) {
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
					...(data.brands?.length && { brands: data.brands }),
					...(data.countries?.length && {
						countries: data.countries,
					}),
					...(data.availability?.length && {
						availability: data.availability,
					}),
					...(data.composition?.length && {
						composition: data.composition,
					}),
					...(data.packing?.length && { packing: data.packing }),
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

	async getProductsByBrand(brand: string, data: IProductFilterData) {
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

	async getFoundProducts(data: ISearchProducts) {
		return await axios.get<IProductResponse>(
			`${this.PRODUCTS_URL}?searchTerm=${data.searchTerm}&limit=${data.limit}&page=${data.page}&sortBy=${data.sortBy}`
		)
	}
}

export default new ProductService()
