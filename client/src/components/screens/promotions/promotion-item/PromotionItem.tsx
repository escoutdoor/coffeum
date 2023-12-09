import s from './promotion-item.module.scss'
import Link from 'next/link'
import Text from '@/components/ui/heading/text/Text'
import PromotionMeta from '@/components/ui/promotion-meta/PromotionMeta'
import { IPromotionItem } from '@/interfaces/promotion-item.interface'
import PromotionImage from '@/components/ui/promotion-image/PromotionImage'

const PromotionItem = ({ item }: { item: IPromotionItem }) => {
	return (
		<section className={s.discount__item}>
			<PromotionImage
				title={item.name}
				promotionId={item.id}
				imagePath={item.imagePath}
			/>
			<Link
				href={{
					pathname: '/promotions/[id]',
					query: { id: item.id },
				}}
			>
				<h1 className={s.title}>{item.name}</h1>
			</Link>

			<PromotionMeta date={item.createdAt} />

			<Text>{item.description}</Text>
			<Link
				href={{
					pathname: '/promotions/[id]',
					query: { id: item.id },
				}}
			>
				<button className={s.read__button}>читати далі +</button>
			</Link>
		</section>
	)
}

export default PromotionItem
