import { limitOptions } from '@/helpers/sorting-options'
import s from './pagination.module.scss'
import { FC } from 'react'
import Select from 'react-select'
import PaginationItem from './pagination-item/PaginationItem'
import { useQueryParams } from '@/hooks/useQueryParams'
import { getPages } from '@/utils/pagination'
import { useGetFilterParams } from '@/hooks/useGetFilterParams'

const Pagination: FC<{ length: number }> = ({ length }) => {
	const { limit, page } = useGetFilterParams()

	const updateQueryParam = useQueryParams()

	const pages = getPages(length, +limit)

	return (
		<div className={s.pagination}>
			<div className={s.viewing}>
				<p>Показано:</p>

				<Select
					id="pagination-select"
					instanceId={'pagination-select'}
					className={s.count}
					defaultValue={limitOptions[0]}
					value={{ label: Number(limit), value: Number(limit) }}
					options={limitOptions}
					onChange={e => {
						updateQueryParam('limit', e?.value.toString()!)
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
			<ul className={s.pages}>
				{pages.map(item => (
					<PaginationItem
						key={item}
						active={item === +page}
						page={item}
						select={() => updateQueryParam('page', item.toString())}
					/>
				))}
			</ul>
		</div>
	)
}

export default Pagination
