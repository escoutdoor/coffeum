import { useQuery } from '@tanstack/react-query'
import productService from '@/services/product/product.service'
import { ProductType } from '@/shared/interfaces/product.interface'
import { IProductFilterData } from '@/shared/interfaces/filter-data.interface'

export const useFilteredProducts = (
	type: ProductType,
	dto: IProductFilterData
) => {
	return useQuery(
		['filtered products'],
		() => productService.getAll(type, dto),
		{
			select: ({ data }) => data,
			enabled: !!type && !!dto,
		}
	)
}
