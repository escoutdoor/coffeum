import s from './attention-box.module.scss'
import { FC } from 'react'

const AttentionBox: FC<{ text: string[] }> = ({ text }) => {
	return (
		<div className={s.box}>
			{text.map(item => (
				<h1 className={s.text}>{item}</h1>
			))}
		</div>
	)
}

export default AttentionBox
