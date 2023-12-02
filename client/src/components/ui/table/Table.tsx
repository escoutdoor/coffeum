import MiddleTitle from '../heading/middle-title/MiddleTitle'
import SmallText from '../heading/small-text/SmallText'
import Text from '../heading/text/Text'
import TableHeaderItem from './table-header-item/TableHeaderItem'
import s from './table.module.scss'
import { FC, PropsWithChildren } from 'react'

const Table: FC<PropsWithChildren<{ items: string[] }>> = ({
	items,
	children,
}) => {
	return (
		<table className={s.table}>
			<thead>
				<tr>
					{items.map((item, index) => (
						<TableHeaderItem key={index}>{item}</TableHeaderItem>
					))}
					<th></th>
				</tr>
			</thead>

			<tbody className={s.items}>{children}</tbody>
		</table>
	)
}

export default Table
