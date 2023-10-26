import productService from '@/services/product/product.service'
import { ISearchProducts } from '@/shared/interfaces/filter-data.interface'
import { useQuery } from '@tanstack/react-query'

export const useSearchProducts = (dto: ISearchProducts) => {
	return useQuery(
		['found products'],
		() => productService.getFoundProducts(dto),
		{
			select: ({ data }) => data,
		}
	)
}
