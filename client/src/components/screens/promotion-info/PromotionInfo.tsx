import s from './promotion-info.module.scss'
import Layout from '@/components/layout/Layout'
import Text from '@/components/ui/heading/text/Text'
import PageHeader from '@/components/ui/page-header/PageHeader'
import PromotionImage from '@/components/ui/promotion-image/PromotionImage'
import PromotionMeta from '@/components/ui/promotion-meta/PromotionMeta'
import { useState, useEffect } from 'react'
import { promotions } from '@/helpers/promotions'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { IPromotionItem } from '@/interfaces/promotion-item.interface'

const PromotionInfo: NextPage = () => {
	const [promotion, setPromotion] = useState<IPromotionItem>({
		...promotions[0],
	})

	const router = useRouter()

	const promotionId = router.query.id

	useEffect(() => {
		if (promotionId) {
			setPromotion(promotions[+promotionId - 1])
		}
	}, [promotionId])

	return (
		<Layout title={promotion.title}>
			<PageHeader
				title={promotion.title}
				tags={[{ title: 'Акції', link: '/promotions' }]}
			/>
			<PromotionImage
				title={promotion.title}
				promotionId={promotion.id.toString()}
				image={`/images/img/promotions/${promotion.image}`}
			/>
			<div className={s.text__content}>
				<PromotionMeta date={promotion.date} />
				<Text>{promotion.description}</Text>
			</div>
		</Layout>
	)
}

export default PromotionInfo
