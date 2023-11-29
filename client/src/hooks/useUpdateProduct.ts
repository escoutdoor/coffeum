import productService from '@/services/product/product.service'
import { IProduct } from '@/shared/interfaces/product.interface'
import { useMutation, useQueryClient } from '@tanstack/react-query'

export const useUpdateProduct = () => {
	const queryClient = useQueryClient()

	const {
		mutate: updateProduct,
		isLoading,
		error,
	} = useMutation({
		mutationKey: ['update product'],
		mutationFn: ({
			data,
			id,
		}: {
			data: Omit<IProduct, 'id' | 'image'> & {
				image?: string
			}
			id: string
		}) => productService.updateProduct(data, id),
		onSuccess: async () => {
			await queryClient.invalidateQueries(['products'])
		},
	})

	return {
		updateProduct,
		isLoading,
		error,
	}
}
