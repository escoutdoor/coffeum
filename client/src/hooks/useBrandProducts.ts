import { useQuery } from '@tanstack/react-query'
import productService from '@/services/product/product.service'
import { IProductFilterData } from '@/shared/interfaces/filter-data.interface'

export const useBrandProducts = (id: string, data: IProductFilterData) => {
	return useQuery(
		['products by brand', id],
		() => productService.getProductsByBrand(id, data),
		{
			select: ({ data }) => data,
		}
	)
}
