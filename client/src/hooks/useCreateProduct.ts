import productService from '@/services/product/product.service'
import { IProduct } from '@/shared/interfaces/product.interface'
import { useMutation, useQueryClient } from '@tanstack/react-query'

export const useCreateProduct = () => {
	const queryClient = useQueryClient()

	const {
		mutate: createProduct,
		isLoading,
		error,
		isSuccess,
	} = useMutation({
		mutationKey: ['create product'],
		mutationFn: async (data: Omit<IProduct, 'id'>) =>
			productService.createProduct(data),
		onSuccess: async () =>
			await queryClient.invalidateQueries(['products']),
	})

	return {
		createProduct,
		isLoading,
		error,
		isSuccess,
	}
}
