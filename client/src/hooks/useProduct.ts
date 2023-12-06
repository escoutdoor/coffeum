import { useQuery } from '@tanstack/react-query'
import { ProductService } from '@/services/product/product.service'

export const useProduct = (id: string) => {
	const {
		data: product,
		error,
		isLoading,
		status,
		isError,
	} = useQuery({
		queryKey: ['product', id],
		queryFn: () => ProductService.getProductById(id),
		select: ({ data }) => data,
		enabled: !!id,
	})

	return {
		product,
		error,
		isLoading,
		status,
		isError,
	}
}
