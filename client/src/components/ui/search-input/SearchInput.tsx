import s from './search-input.module.scss'
import { InputHTMLAttributes } from 'react'

interface ISearchInput
	extends Omit<InputHTMLAttributes<HTMLInputElement>, 'className'> {
	label?: string
	value: string
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const SearchInput = ({ label, value, onChange, ...rest }: ISearchInput) => {
	return (
		<input
			{...rest}
			className={s.input}
			type="text"
			value={value}
			onChange={onChange}
		/>
	)
}

export default SearchInput
