import s from './pagination-item.module.scss'
import { FC } from 'react'

interface IPaginationItem {
	page: number
	active: boolean
	select: () => void
}

const PaginationItem: FC<IPaginationItem> = ({ active, page, select }) => {
	return (
		<li
			className={active ? `${s.item} ${s.active}` : s.item}
			onClick={select}
		>
			<span>{page}</span>
		</li>
	)
}

export default PaginationItem
