import s from './table-header-item.module.scss'
import { FC } from 'react'

const TableHeaderItem: FC<{ title: string }> = ({ title }) => {
	return (
		<th className={s.item}>
			<h1 className={s.title}>{title}</h1>
		</th>
	)
}

export default TableHeaderItem
