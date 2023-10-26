import { limitOptions, sortingOptions } from '@/helpers/sorting-options'
import s from './sorting-bar.module.scss'
import { FC } from 'react'
import Select from 'react-select'
import { BsFillGrid3X3GapFill } from 'react-icons/bs'
import { FaThList } from 'react-icons/fa'
import { useQueryParams } from '@/hooks/useQueryParams'
import { useGetFilterParams } from '@/hooks/useGetFilterParams'

const SortingBar: FC = () => {
	const updateQueryParam = useQueryParams()

	const { limit, sortBy, view } = useGetFilterParams()

	return (
		<div className={s.bar}>
			<div className={s.container}>
				<p className={s.label}>Сортувати по:</p>
				<Select
					id="sorting-select"
					instanceId="sorting-select"
					className={s.sorting__select}
					options={sortingOptions}
					defaultValue={sortingOptions[0]}
					value={{
						label: sortingOptions.find(s => s.value === sortBy)
							?.label,
						value: sortBy,
					}}
					onChange={e => {
						updateQueryParam('sortBy', e?.value as string)
					}}
					theme={theme => ({
						...theme,
						borderRadius: 0,
						colors: {
							...theme.colors,
							primary25: '#ccc',
							primary: '#777',
						},
					})}
				/>
			</div>
			<div className={s.container}>
				<p className={s.label}>Показано:</p>
				<Select
					id="limit-select"
					instanceId="limit-select"
					className={s.count}
					options={limitOptions}
					defaultValue={limitOptions[0]}
					value={{ label: +limit, value: +limit }}
					onChange={e => {
						updateQueryParam('limit', e?.value.toString() as string)
					}}
					theme={theme => ({
						...theme,
						borderRadius: 0,
						colors: {
							...theme.colors,
							primary25: '#ccc',
							primary: '#777',
						},
					})}
				/>
				<div className={s.buttons}>
					<BsFillGrid3X3GapFill
						className={
							view === 'grid'
								? `${s.button} ${s.active}`
								: s.button
						}
						onClick={() => {
							updateQueryParam('view', 'grid')
						}}
					/>
					<FaThList
						className={
							view === 'list'
								? `${s.button} ${s.active}`
								: s.button
						}
						onClick={() => {
							updateQueryParam('view', 'list')
						}}
					/>
				</div>
			</div>
		</div>
	)
}

export default SortingBar
