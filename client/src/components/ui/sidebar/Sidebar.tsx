import { ISidebarData } from '@/shared/interfaces/sidebar.interface'
import s from './sidebar.module.scss'
import { FC, useState } from 'react'
import FilterRange from './filter-range/FilterRange'
import SideBarItem from './sidebar-item/SideBarItem'
import SelectedFilters from './selected-filters/SelectedFilters'
import { IoReloadCircle } from 'react-icons/io5'
import { useGetFilterParams } from '@/hooks/useGetFilterParams'
import { useRouter } from 'next/router'

interface ISidebar {
	data: ISidebarData
}

const Sidebar: FC<ISidebar> = ({ data }) => {
	const router = useRouter()

	const [active, setActive] = useState('Виробники')

	const {
		brands,
		minPrice,
		maxPrice,
		availability,
		countries,
		composition,
		packing,
	} = useGetFilterParams(data)

	const reset = () => {
		router.push(`/${router.query.categoryId}`, undefined, {
			scroll: false,
			shallow: true,
		})
	}

	return (
		<div className={s.sidebar}>
			<SelectedFilters
				brands={brands}
				countries={countries}
				availability={availability}
				composition={composition}
				packing={packing}
			/>
			<FilterRange
				title={'Ціна'}
				initialMinPrice={data.initialMinPrice}
				initialMaxPrice={data.initialMaxPrice}
				minPrice={minPrice}
				maxPrice={maxPrice}
			/>
			<SideBarItem
				title="Наявність"
				options={data.availability}
				selected={availability}
				activeGroup={active === 'Наявність'}
				setActiveGroup={setActive}
				group="availability"
			/>
			<SideBarItem
				title="Виробники"
				options={data.brands}
				selected={brands}
				activeGroup={active === 'Виробники'}
				setActiveGroup={setActive}
				group="brands"
			/>
			<SideBarItem
				title="Країна виробник"
				options={data.countries}
				selected={countries}
				activeGroup={active === 'Країна виробник'}
				setActiveGroup={setActive}
				group="countries"
			/>
			{data.packing && (
				<SideBarItem
					title="Фасування"
					options={data.packing}
					selected={packing}
					activeGroup={active === 'Фасування'}
					setActiveGroup={setActive}
					group="packing"
				/>
			)}
			{data.composition && (
				<SideBarItem
					title="Склад"
					options={data.composition}
					selected={composition}
					activeGroup={active === 'Склад'}
					setActiveGroup={setActive}
					group="composition"
				/>
			)}
			<div className={s.reset__button} onClick={() => reset()}>
				<IoReloadCircle />
				<p>Очистити</p>
			</div>
		</div>
	)
}

export default Sidebar
