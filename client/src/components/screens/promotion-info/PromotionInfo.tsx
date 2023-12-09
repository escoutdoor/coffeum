import s from './promotion-info.module.scss'
import { NextPage } from 'next'
import { IPromotionItem } from '@/interfaces/promotion-item.interface'
import Layout from '@/components/layout/Layout'
import Text from '@/components/ui/heading/text/Text'
import PageHeader from '@/components/ui/page-header/PageHeader'
import PromotionMeta from '@/components/ui/promotion-meta/PromotionMeta'
import PromotionImage from '@/components/ui/promotion-image/PromotionImage'

const PromotionInfo: NextPage<{ promotion: IPromotionItem }> = ({
	promotion,
}) => {
	return (
		<Layout title={promotion.name}>
			<PageHeader
				title={promotion.name}
				tags={[{ title: 'Акції', link: '/promotions' }]}
			/>
			<PromotionImage
				title={promotion.name}
				promotionId={promotion.id}
				imagePath={promotion.imagePath}
			/>
			<div className={s.text__content}>
				<PromotionMeta date={promotion.createdAt} />
				<Text>{promotion.description}</Text>
			</div>
		</Layout>
	)
}

export default PromotionInfo
