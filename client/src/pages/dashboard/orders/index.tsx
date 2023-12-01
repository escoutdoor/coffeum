import DashboardOrders from '@/components/screens/dashboard/orders/DashboardOrders'
import { useAllOrders } from '@/hooks/useAllOrders'

export default function DashboardOrdersPage() {
	const { orders, isLoading, error } = useAllOrders()

	return <DashboardOrders orders={orders || []} />
}
