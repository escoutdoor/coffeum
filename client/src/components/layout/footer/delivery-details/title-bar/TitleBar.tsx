import s from './title-bar.module.scss'
import { FC } from 'react'

type TitleBarProps = {
	title: string
}

const TitleBar: FC<TitleBarProps> = ({ title }) => {
	return <li className={s.title__bar}>{title}</li>
}

export default TitleBar
