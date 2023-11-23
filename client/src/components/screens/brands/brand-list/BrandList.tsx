import s from './brand-list.module.scss'
import { FC } from 'react'
import BrandItem from './brand-item/BrandItem'
type BrandListProps = {
	brands: string[]
}

const BrandList: FC<BrandListProps> = ({ brands }) => {
	return (
		<div className={s.brands}>
			{brands?.map(brand => (
				<BrandItem
					key={brand}
					name={brand}
					image={`/images/img/brands/${brand
						.toLowerCase()
						.replaceAll(' ', '-')}.webp`}
				/>
			))}
		</div>
	)
}

export default BrandList
