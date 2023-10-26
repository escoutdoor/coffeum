import { useQuery } from '@tanstack/react-query'
import productService from '@/services/product/product.service'

export const useProduct = (id: string) => {
	return useQuery(['product', id], () => productService.getProductById(id), {
		select: ({ data }) => data,
		enabled: !!id,
	})
}
