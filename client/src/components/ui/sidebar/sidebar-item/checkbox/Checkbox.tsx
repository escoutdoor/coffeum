import Text from '@/components/ui/heading/text/Text'
import s from './checkbox.module.scss'
import { FC } from 'react'
import { BsCheckLg } from 'react-icons/bs'

interface ICheckbox {
	title: string
	selectOption: (title: string) => void
	active: boolean
}

const Checkbox: FC<ICheckbox> = ({ title, selectOption, active }) => {
	return (
		<li
			className={active ? `${s.option} ${s.active}` : s.option}
			onClick={() => selectOption(title)}
		>
			<div className={s.checkbox}>
				<input type="checkbox" />
				<span>
					<BsCheckLg />
				</span>
			</div>
			<Text>{title}</Text>
		</li>
	)
}

export default Checkbox
