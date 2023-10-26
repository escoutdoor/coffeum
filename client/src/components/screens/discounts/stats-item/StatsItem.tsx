import s from './stats-item.module.scss'
import { FC } from 'react'

const StatsItem: FC<{ title: string; description: string }> = ({ title, description }) => {
	return (
		<section className={s.stats__block}>
			<h1>{title}</h1>
			<p>{description}</p>
		</section>
	)
}

export default StatsItem
