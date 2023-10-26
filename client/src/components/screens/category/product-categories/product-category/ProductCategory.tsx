import Image from 'next/image'
import s from './product-category.module.scss'
import { FC } from 'react'
import { IProductCategory } from '@/interfaces/product-category.interface'
import { useQueryParams } from '@/hooks/useQueryParams'

type IProductCategoryProps = {
	category: IProductCategory
	active: boolean
}

const ProductCategory: FC<IProductCategoryProps> = ({ category, active }) => {
	const updateQueryParam = useQueryParams()

	return (
		<div
			onClick={() =>
				updateQueryParam('category', active ? '' : category.name)
			}
			className={active ? `${s.category} ${s.active}` : s.category}
		>
			<Image
				src={`/images/img/category/categories/${category.image}`}
<<<<<<< HEAD
				width={0}
				height={0}
				sizes="100vw"
=======
				width={151}
				height={100}
>>>>>>> 5159a9b674539dc2e2001b7e508ac086cc645379
				alt={`category image: ${category.name}`}
			/>
			<div className={s.details}>
				<h1>{category.name}</h1>
				<span>{category.quantity} товарів</span>
			</div>
		</div>
	)
}

export default ProductCategory
