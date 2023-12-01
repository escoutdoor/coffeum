import { useQuery } from '@tanstack/react-query'
import { ProductService } from '@/services/product/product.service'

export const useBrands = () => {
	return useQuery(['brands'], () => ProductService.getAllBrands(), {
		select: ({ data }) => data.map((r: { brand: string }) => r.brand),
	})
}
