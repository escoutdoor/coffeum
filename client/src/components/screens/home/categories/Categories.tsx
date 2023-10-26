import s from './categories.module.scss'
import { categories } from '@/helpers/categories'
import { FC } from 'react'
import Category from './category/Category'

const Categories: FC = () => {
	return (
		<div className={s.categories}>
			{categories.map(category => (
				<Category
					key={category.id}
					link={category.link}
					id={category.id}
					title={category.title}
					image={`/images/img/home/${category.image}`}
				/>
			))}
		</div>
	)
}

export default Categories
