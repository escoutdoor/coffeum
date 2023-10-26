import Link from 'next/link'
import s from './information-tab-item.module.scss'
import { FC } from 'react'
import { ProductType } from '@/shared/interfaces/product.interface'

interface IInformationTabItem {
	title: string
	query: string
	value: string | string[]
	type: ProductType
}

const InformationTabItem: FC<IInformationTabItem> = ({ title, query, value, type }) => {
	const isString = typeof value === 'string'

	return (
		<li className={s.item}>
			<h1 className={s.title}>{title}</h1>
			<div>
				{isString ? (
					<Link className={s.link} href={`/${type}?${query}=${value}`}>
						{value}
					</Link>
				) : (
					value.map((item, index) => (
						<Link key={index} className={s.link} href={`/${type}?${query}=${item}`}>
							{item}
						</Link>
					))
				)}
			</div>
		</li>
	)
}

export default InformationTabItem
