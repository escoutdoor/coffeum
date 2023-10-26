import s from './search-manufacturer.module.scss'
import { FC } from 'react'

interface SearchManufacturerProps {
	text: string
	setText: (text: string) => void
}

const SearchManufacturer: FC<SearchManufacturerProps> = ({ text, setText }) => {
	return (
		<input className={s.input} value={text} onChange={e => setText(e.target.value)} placeholder="Пошук виробника" />
	)
}

export default SearchManufacturer
