import Layout from '@/components/layout/Layout'
import PageHeader from '@/components/ui/page-header/PageHeader'
import { promotions } from '@/helpers/promotions'
import { NextPage } from 'next'
import PromotionItem from './promotion-item/PromotionItem'

const Promotions: NextPage = () => {
	return (
		<Layout title="Акції" description="Завжди в курсі акцій! Вибирайте найкращі пропозиції та знижки.">
			<PageHeader title="Акції" />
			<main>
				{promotions.map(promotion => (
					<PromotionItem
						key={promotion.id}
						id={promotion.id}
						title={promotion.title}
						image={`/images/img/promotions/${promotion.image}`}
						date={promotion.date}
						description={promotion.description}
					/>
				))}
			</main>
		</Layout>
	)
}

export default Promotions
