import { useQuery } from '@tanstack/react-query'
import { ProductService } from '@/services/product/product.service'
import { EnumProductType } from '@/shared/interfaces/product.interface'
import { IProductFilter } from '@/shared/interfaces/filter-data.interface'

export const useFilteredProducts = ({
	type,
	data,
}: {
	type: EnumProductType
	data: IProductFilter
}) => {
	return useQuery({
		queryKey: ['filtered products'],
		queryFn: () => ProductService.getAll(type, data),
		select: ({ data }) => data,
		enabled: !!type && !!data,
	})
}
