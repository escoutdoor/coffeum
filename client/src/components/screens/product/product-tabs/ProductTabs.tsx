import s from './product-tabs.module.scss'
import { IProduct } from '@/shared/interfaces/product.interface'
import { FC } from 'react'
import ProductTabsNavigation from './product-tabs-navigation/ProductTabsNavigation'
import { useSearchParams } from 'next/navigation'
import DescriptionTab from './description-tab/DescriptionTab'
import InformationTab from './information-tab/InformationTab'
import ReviewsTab from './reviews-tab/ReviewsTab'

const ProductTabs: FC<{ product: IProduct }> = ({ product }) => {
	const searchParams = useSearchParams()

	const activeTab = searchParams.get('tab') || 'desc'

	return (
		<div>
			<ProductTabsNavigation activeTab={activeTab} reviewCount={product.reviews?.length || 0} />
			<div className={s.tab}>
				{activeTab === 'desc' && <DescriptionTab description={product.description!} />}
				{activeTab === 'information' && <InformationTab product={product} />}
				{activeTab === 'reviews' && <ReviewsTab reviews={product.reviews} productId={product.id} />}
			</div>
		</div>
	)
}

export default ProductTabs
