import { useQuery } from '@tanstack/react-query'
import productService from '@/services/product/product.service'
import { IProductFilter } from '@/shared/interfaces/filter-data.interface'

export const useBrandProducts = ({
	id,
	data,
}: {
	id: string
	data: IProductFilter
}) => {
	return useQuery(
		['products by brand', id],
		() => productService.getProductsByBrand(id, data),
		{
			select: ({ data }) => data,
		}
	)
}
