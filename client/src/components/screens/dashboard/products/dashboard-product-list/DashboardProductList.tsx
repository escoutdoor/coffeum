import DashboardProductModify from './dashboard-product-modify/DashboardProductModify'
import s from './dashboard-product-list.module.scss'
import { IProduct } from '@/shared/interfaces/product.interface'
import DashboardListItem from '../../dashboard-list-item/DashboardListItem'

const DashboardProductList = ({ products }: { products: IProduct[] }) => {
	return (
		<ul className={s.list}>
			{products?.map(item => (
				<DashboardListItem
					key={item.id}
					title={item.name}
					image={`/images/img/products/${
						item.image || 'no-image.jpg'
					}`}
				>
					<DashboardProductModify product={item} />
				</DashboardListItem>
			))}
		</ul>
	)
}

export default DashboardProductList
