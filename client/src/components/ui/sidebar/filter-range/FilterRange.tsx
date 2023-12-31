import s from './filter-range.module.scss'
import FilterTitle from '@/components/ui/heading/filter-title/FilterTitle'
import { useQueryParams } from '@/hooks/useQueryParams'
import { FC } from 'react'
import ReactSlider from 'react-slider'

interface IFilterRange {
	title: string
	initialMinPrice: number
	initialMaxPrice: number
	minPrice: number
	maxPrice: number
}

const FilterRange: FC<IFilterRange> = ({
	title,
	initialMinPrice,
	initialMaxPrice,
	minPrice,
	maxPrice,
}) => {
	const updateQueryParams = useQueryParams()

	const handlePrice = (values: number[]) => {
		const [min, max] = values

		if (max !== maxPrice) {
			updateQueryParams({ name: 'max', value: max.toString() })
		}

		if (min !== minPrice) {
			updateQueryParams({ name: 'min', value: min.toString() })
		}
	}

	return (
		<div className={s.filter}>
			<FilterTitle>{title}</FilterTitle>
			<div className={s.range__block}>
				<div className={s.values}>
					<span>{minPrice} ₴</span>
					<span>{maxPrice} ₴</span>
				</div>
				<ReactSlider
					className={s.range}
					thumbClassName={s.thumb}
					trackClassName={s.track}
					value={[Number(minPrice), Number(maxPrice)]}
					min={initialMinPrice}
					max={initialMaxPrice}
					onChange={handlePrice}
					minDistance={50}
				/>
				<div className={s.default__values}>
					<span>{initialMinPrice} ₴</span>
					<span>{initialMaxPrice} ₴</span>
				</div>
			</div>
		</div>
	)
}

export default FilterRange
