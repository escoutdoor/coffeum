import DashboardProductListItem from './dashboard-product-list-item/DashboardProductListItem'
import s from './dashboard-product-list.module.scss'
import { IProduct } from '@/shared/interfaces/product.interface'

const DashboardProductList = ({ products }: { products: IProduct[] }) => {
	return (
		<ul className={s.list}>
			{products?.map(item => (
				<DashboardProductListItem key={item.id} item={item} />
			))}
		</ul>
	)
}

export default DashboardProductList
