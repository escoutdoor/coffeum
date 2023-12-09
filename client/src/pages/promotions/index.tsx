import Promotions from '@/components/screens/promotions/Promotions'
import { IPromotionItem } from '@/interfaces/promotion-item.interface'
import { PromotionService } from '@/services/promotion/promotion.service'
import { GetStaticProps } from 'next'

export default function PromotionsPage({
	promotions,
}: {
	promotions: IPromotionItem[]
}) {
	return <Promotions promotions={promotions} />
}

export const getStaticProps: GetStaticProps = async () => {
	const { data: promotions } = await PromotionService.getAll()

	return {
		props: {
			promotions,
		},
		revalidate: 1,
	}
}
