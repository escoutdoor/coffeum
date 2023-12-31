import { OrderService } from '@/services/order/order.service'
import {
	EnumOrderStatus,
	ICreateOrder,
} from '@/shared/interfaces/order.interface'
import { useMutation } from '@tanstack/react-query'
import { useActions } from './useActions'
import { useCart } from './useCart'
import { useRouter } from 'next/navigation'

export const useCreateOrder = () => {
	const { resetCart } = useActions()

	const { replace } = useRouter()

	const { cart } = useCart()

	const {
		mutate: createOrder,
		isLoading,
		error,
	} = useMutation({
		mutationKey: ['create an order'],
		mutationFn: (data: Omit<ICreateOrder, 'status' | 'items'>) =>
			OrderService.createOrder({
				...data,
				status: EnumOrderStatus.PENDING,
				items: cart.map(item => ({
					quantity: item.quantity,
					productId: item.product.id,
				})),
			}),
		onSuccess: () => {
			resetCart()
			replace('/success')
		},
	})

	return {
		createOrder,
		isLoading,
		error,
	}
}
