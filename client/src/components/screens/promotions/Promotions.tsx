import Layout from '@/components/layout/Layout'
import PageHeader from '@/components/ui/page-header/PageHeader'
import { NextPage } from 'next'
import PromotionItem from './promotion-item/PromotionItem'
import { IPromotionItem } from '@/interfaces/promotion-item.interface'

const Promotions: NextPage<{ promotions: IPromotionItem[] }> = ({
	promotions,
}) => {
	return (
		<Layout
			title="Акції"
			description="Завжди в курсі акцій! Вибирайте найкращі пропозиції та знижки."
		>
			<PageHeader title="Акції" />
			<main>
				{promotions?.map(item => (
					<PromotionItem key={item.id} item={item} />
				))}
			</main>
		</Layout>
	)
}

export default Promotions
