import { TextProps } from '@/shared/interfaces/text.interface'
import s from './table-header-item.module.scss'
import { FC, PropsWithChildren } from 'react'
import MiddleTitle from '../../heading/middle-title/MiddleTitle'

const TableHeaderItem: FC<PropsWithChildren<TextProps>> = ({
	children,
	...rest
}) => {
	return (
		<th className={s.item}>
			<MiddleTitle>{children}</MiddleTitle>
		</th>
	)
}

export default TableHeaderItem
