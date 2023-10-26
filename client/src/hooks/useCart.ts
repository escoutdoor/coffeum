import { useTypedSelector } from './useTypedSelector'

export const useCart = () => {
	const cart = useTypedSelector(state => state.cart.items)

	const total = cart.reduce(
		(acc, item) => acc + item.product.discountedPrice * item.quantity,
		0
	)

	return { cart, total }
}
