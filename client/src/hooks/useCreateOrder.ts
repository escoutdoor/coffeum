import orderService from '@/services/order/order.service'
import {
	EnumOrderStatus,
	ICreateOrder,
} from '@/shared/interfaces/order.interface'
import { useMutation } from '@tanstack/react-query'
import { useActions } from './useActions'
import { useCart } from './useCart'

export const useCreateOrder = () => {
	const { resetCart } = useActions()

	const { cart } = useCart()

	const {
		mutate: createOrder,
		isLoading,
		error,
	} = useMutation({
		mutationKey: ['create an order'],
		mutationFn: (data: Omit<ICreateOrder, 'status' | 'items'>) =>
			orderService.createOrder({
				...data,
				status: EnumOrderStatus.PENDING,
				items: cart.map(item => ({
					quantity: item.quantity,
					productId: item.product.id,
				})),
			}),
		onSuccess: () => {
			resetCart()
		},
	})

	return {
		createOrder,
		isLoading,
		error,
	}
}
