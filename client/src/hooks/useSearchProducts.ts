import productService from '@/services/product/product.service'
import { IFilterSort } from '@/shared/interfaces/filter-data.interface'
import { useQuery } from '@tanstack/react-query'

export const useSearchProducts = (data: IFilterSort) => {
	const {
		data: productData,
		isLoading,
		error,
		refetch,
	} = useQuery({
		queryKey: ['products'],
		queryFn: () => productService.getFoundProducts(data),
		select: ({ data }) => data,
	})

	return {
		products: productData?.products,
		length: productData?.length,
		isLoading,
		error,
		refetch,
	}
}
