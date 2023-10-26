import Link from 'next/link'
import s from './search.module.scss'
import { FC } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { useQueryParams } from '@/hooks/useQueryParams'
import { useGetFilterParams } from '@/hooks/useGetFilterParams'
import { useRouter } from 'next/router'

const Search: FC = () => {
	const router = useRouter()
	const updateQueryParams = useQueryParams()
	const { query } = useGetFilterParams()

	return (
		<div className={s.search}>
			<input
				placeholder="Пошук..."
				className={s.input}
				type="text"
				value={query}
				onChange={e => updateQueryParams('q', e.target.value)}
				onKeyDown={e => {
					if (e.key === 'Enter') {
						router.push(`/search-products?q=${query}`)
					}
				}}
			/>
			<Link href={`/search-products?q=${query}`}>
				<AiOutlineSearch className={s.icon} size={20} />
			</Link>
		</div>
	)
}

export default Search
