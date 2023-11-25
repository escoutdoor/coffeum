import productService from '@/services/product/product.service'
import { IFilterSort } from '@/shared/interfaces/filter-data.interface'
import { useQuery } from '@tanstack/react-query'

export const useSearchProducts = (data: IFilterSort) => {
	return useQuery(
		['found products'],
		() => productService.getFoundProducts(data),
		{
			select: ({ data }) => data,
		}
	)
}
