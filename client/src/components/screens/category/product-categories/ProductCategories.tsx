import s from './product-categories.module.scss'
import ProductCategory from './product-category/ProductCategory'
import { IProductCategory } from '@/interfaces/product-category.interface'
import { FC } from 'react'

interface IProductCategories {
	categories: IProductCategory[]
	activeCategory: string
}

const ProductCategories: FC<IProductCategories> = ({
	categories,
	activeCategory,
}) => {
	return (
		<div className={s.categories}>
			{categories.map(item => (
				<ProductCategory
					key={item.name}
					category={item}
					active={activeCategory === item.name}
				/>
			))}
		</div>
	)
}

export default ProductCategories
