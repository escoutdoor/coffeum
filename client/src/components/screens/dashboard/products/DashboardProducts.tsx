import DashboardLayout from '../layout/DashboardLayout'
import { IProduct } from '@/shared/interfaces/product.interface'
import DashboardProductList from './dashboard-product-list/DashboardProductList'

const DashboardProducts = ({ products }: { products: IProduct[] }) => {
	console.log(products)

	return (
		<DashboardLayout title="Products">
			<DashboardProductList products={products || []} />
		</DashboardLayout>
	)
}

export default DashboardProducts
