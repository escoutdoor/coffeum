import s from './dashboard-product-list-item.module.scss'
import { useState } from 'react'
import { IProduct } from '@/shared/interfaces/product.interface'
import { FaAngleDown } from 'react-icons/fa6'
import MiddleTitle from '@/components/ui/heading/middle-title/MiddleTitle'
import Miniature from '@/components/ui/miniature/Miniature'
import DashboardProductModify from './dashboard-product-modify/DashboardProductModify'

const DashboardProductListItem = ({ item }: { item: IProduct }) => {
	const [active, setActive] = useState<boolean>(false)

	return (
		<li
			className={active ? `${s.item} ${s.active}` : s.item}
			onClick={() => setActive(!active)}
		>
			<div className={s.preview}>
				<div className={s.left}>
					<Miniature src={`/images/img/products/${item.image}`} />
					<MiddleTitle>{item.name}</MiddleTitle>
				</div>
				<FaAngleDown className={s.icon} />
			</div>

			<div className={s.dropdown} onClick={e => e.stopPropagation()}>
				<DashboardProductModify product={item} />
			</div>
		</li>
	)
}

export default DashboardProductListItem
