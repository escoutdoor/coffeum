import { useQuery } from '@tanstack/react-query'
import { ProductService } from '@/services/product/product.service'

export const useProduct = (id: string) => {
	return useQuery(['product', id], () => ProductService.getProductById(id), {
		select: ({ data }) => data,
		enabled: !!id,
	})
}
