import s from './product-tabs-navigation.module.scss'
import { FC } from 'react'
import { tabsNavigation } from '@/helpers/tabs-navigation'
import { useQueryParams } from '@/hooks/useQueryParams'

const ProductTabsNavigation: FC<{ activeTab: string; reviewCount: number }> = ({
	activeTab,
	reviewCount,
}) => {
	const updateQueryParams = useQueryParams()

	return (
		<ul className={s.navigation}>
			{tabsNavigation.map(item => (
				<li
					className={
						activeTab === item.value
							? `${s.navigation__item} ${s.active}`
							: s.navigation__item
					}
					key={item.id}
					onClick={() =>
						updateQueryParams({ name: 'tab', value: item.value })
					}
				>
					{item.value === 'reviews'
						? item.title + ` (${reviewCount}) `
						: item.title}
				</li>
			))}
		</ul>
	)
}

export default ProductTabsNavigation
