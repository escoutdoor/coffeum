import Dashboard from '@/components/screens/dashboard/Dashboard'
import { useProfile } from '@/hooks/useProfile'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/navigation'

function DashboardPage() {
	const { push } = useRouter()

	const { profile } = useProfile()

	return <Dashboard />
}

export default dynamic(() => Promise.resolve(DashboardPage), { ssr: false })
