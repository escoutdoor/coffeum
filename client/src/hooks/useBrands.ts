import { useQuery } from '@tanstack/react-query'
import productService from '@/services/product/product.service'

export const useBrands = () => {
	return useQuery(['brands'], () => productService.getAllBrands(), {
		select: ({ data }) => data.map((r: { brand: string }) => r.brand),
	})
}
