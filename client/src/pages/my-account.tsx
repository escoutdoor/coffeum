import Auth from '@/components/screens/auth/Auth'
import MyAccount from '@/components/screens/my-account/MyAccount'
import { useAuth } from '@/hooks/useAuth'

export default function MyAccountPage() {
	const { user, isLoading } = useAuth()

	if (!isLoading) {
		return <>{!isLoading && (user ? <MyAccount /> : <Auth />)}</>
	}
}
