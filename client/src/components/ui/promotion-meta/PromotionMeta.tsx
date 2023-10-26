import { getTime } from '@/utils/time'
import s from './promotion-meta.module.scss'
import { FC } from 'react'
import Link from 'next/link'

const PromotionMeta: FC<{ date: Date }> = ({ date }) => {
	return (
		<div className={s.meta}>
			<span className={s.date}>{getTime(date)}</span>
			<Link href={'/promotions'}>
				<span className={s.tag}>акції</span>
			</Link>
		</div>
	)
}

export default PromotionMeta
