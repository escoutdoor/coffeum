import { useQueryParams } from '@/hooks/useQueryParams'
import { FC } from 'react'
import s from '../product-item.module.scss'

const CategoryList: FC<{ categories: string[] }> = ({ categories }) => {
	const updateQueryParams = useQueryParams()

	return (
		<ul className={s.list}>
			{categories?.map(tag => (
				<li
					className={s.list__item}
					onClick={() => {
						if (tag.split(' ').length > 1) {
							updateQueryParams({ name: 'category', value: tag })
						} else {
							updateQueryParams({ name: 'category', value: '' })
						}
					}}
					key={tag}
				>
					{tag}
				</li>
			))}
		</ul>
	)
}

export default CategoryList
