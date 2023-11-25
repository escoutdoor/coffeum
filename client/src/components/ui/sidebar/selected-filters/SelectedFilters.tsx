import FilterItem from './filter-item/FilterItem'
import s from './selected-filters.module.scss'
import { FC } from 'react'

interface ISelectedFilters {
	brands: string[]
	countries: string[]
	availability: string[]
	composition?: string[]
	packing?: string[]
}

const SelectedFilters: FC<ISelectedFilters> = ({
	brands,
	countries,
	availability,
	composition,
	packing,
}) => {
	return (
		<ul className={s.filters}>
			{availability?.map(item => (
				<FilterItem key={item} title={item} group="availability" />
			))}
			{brands?.map(item => (
				<FilterItem key={item} title={item} group="brands" />
			))}
			{countries?.map(item => (
				<FilterItem key={item} title={item} group="countries" />
			))}
			{composition?.map(item => (
				<FilterItem key={item} title={item} group="composition" />
			))}
			{packing?.map(item => (
				<FilterItem key={item} title={item} group="packing" />
			))}
		</ul>
	)
}

export default SelectedFilters
