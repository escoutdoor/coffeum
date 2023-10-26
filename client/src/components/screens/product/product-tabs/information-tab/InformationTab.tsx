import s from './information-tab.module.scss'
import { IProduct } from '@/shared/interfaces/product.interface'
import { FC } from 'react'
import InformationTabItem from './information-tab-item/InformationTabItem'

const InformationTab: FC<{ product: IProduct }> = ({ product }) => {
	return (
		<div className={s.tab}>
			<h1 className={s.title}>Головне</h1>
			<ul className={s.list}>
				<InformationTabItem title="Виробник" query={'brands'} value={product.brand} type={product.type} />
				<InformationTabItem
					title="Країна виробник"
					query={'countries'}
					value={product.country}
					type={product.type}
				/>
				{product.packing && (
					<InformationTabItem
						title="Фасування"
						query={'packing'}
						value={product.packing}
						type={product.type}
					/>
				)}
				<InformationTabItem
					title="Вид"
					query={'category'}
					value={[product.categories[1]]}
					type={product.type}
				/>
			</ul>
			<h1 className={s.title}>Особливості</h1>
			<ul className={s.list}>
				{product.composition && (
					<InformationTabItem
						title="Склад"
						query={'composition'}
						value={product.composition}
						type={product.type}
					/>
				)}
			</ul>
		</div>
	)
}

export default InformationTab
