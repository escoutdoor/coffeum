import s from './promotion-item.module.scss'
import { IPromotionItem } from '@/interfaces/promotion-item.interface'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import Text from '@/components/ui/heading/text/Text'
import PromotionMeta from '@/components/ui/promotion-meta/PromotionMeta'
import PromotionImage from '@/components/ui/promotion-image/PromotionImage'

const PromotionItem: FC<IPromotionItem> = ({
	id,
	title,
	date,
	description,
	image,
}) => {
	return (
		<section className={s.promotion__item}>
			<PromotionImage
				title={title}
				promotionId={id.toString()}
				image={image}
			/>
			<Link
				href={{
					pathname: '/promotions/[id]',
					query: { id },
				}}
			>
				<h1 className={s.title}>{title}</h1>
			</Link>

			<PromotionMeta date={date} />

			<Text>{description}</Text>
			<Link
				href={{
					pathname: '/promotions/[id]',
					query: { id },
				}}
			>
				<button className={s.read__button}>читати далі +</button>
			</Link>
		</section>
	)
}

export default PromotionItem
