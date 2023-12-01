import { useQuery } from '@tanstack/react-query'
import { ProductService } from '@/services/product/product.service'
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
		() => ProductService.getProductsByBrand(id, data),
		{
			select: ({ data }) => data,
		}
	)
}
