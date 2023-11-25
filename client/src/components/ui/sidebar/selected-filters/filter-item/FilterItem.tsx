import { useQueryParams } from '@/hooks/useQueryParams'
import s from './filter-item.module.scss'
import { FC } from 'react'
import { IoIosClose } from 'react-icons/io'

interface IFilterItem {
	title: string
	group: string
}

const FilterItem: FC<IFilterItem> = ({ title, group }) => {
	const updateQueryParam = useQueryParams()

	const removeFilter = (option: string) => {
		updateQueryParam({ name: group, value: option, isArray: true })
	}

	return (
		<li
			className={s.filter__item}
			title={title}
			onClick={() => removeFilter(title)}
		>
			<IoIosClose />
			<span>{title}</span>
		</li>
	)
}

export default FilterItem
