import FilterTitle from '@/components/ui/heading/filter-title/FilterTitle'
import s from './sidebar-item.module.scss'
import { FC } from 'react'
import Checkbox from './checkbox/Checkbox'
import { FiChevronDown } from 'react-icons/fi'
import { useQueryParams } from '@/hooks/useQueryParams'

interface ISideBarItem {
	title: string
	options: string[]
	selected: string[]
	activeGroup: boolean
	setActiveGroup: (value: string) => void
	group: string
}

const SideBarItem: FC<ISideBarItem> = ({
	title,
	options,
	selected,
	activeGroup,
	setActiveGroup,
	group,
}) => {
	const updateQueryParam = useQueryParams()

	const selectOption = (option: string) => {
		updateQueryParam({ name: group, value: option, isArray: true })
	}

	return (
		<div
			className={
				activeGroup ? `${s.sidebar__item} ${s.active}` : s.sidebar__item
			}
			onClick={() => setActiveGroup(activeGroup ? '' : title)}
		>
			<div className={s.header}>
				<FilterTitle>{title}</FilterTitle>
				<FiChevronDown />
			</div>
			<ul className={s.options} onClick={e => e.stopPropagation()}>
				{options?.map(option => (
					<Checkbox
						key={option}
						title={option}
						active={selected.some(s => s === option)}
						selectOption={selectOption}
					/>
				))}
			</ul>
		</div>
	)
}

export default SideBarItem
