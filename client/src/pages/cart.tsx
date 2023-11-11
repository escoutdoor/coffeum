import Cart from '@/components/screens/cart/Cart'
import { useAuth } from '@/hooks/useAuth'
import { useRouter } from 'next/navigation'

export default function CartPage() {
	const { replace } = useRouter()
	const { user } = useAuth()

	if (!user) {
		replace('/my-account')
		return
	}

	return <Cart />
}
