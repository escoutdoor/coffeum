import { ProductService } from '@/services/product/product.service'
import { useQuery } from '@tanstack/react-query'

export const useSimilarProducts = (productId: string) => {
	const {
		data: similarProducts,
		isLoading,
		refetch,
	} = useQuery(
		['similar products'],
		() => ProductService.getSimilarProducts(productId),
		{
			select: ({ data }) => data,
			enabled: !!productId,
		}
	)

	return {
		similarProducts,
		isLoading,
		refetch,
	}
}
