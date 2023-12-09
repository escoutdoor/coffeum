import Home from '@/components/screens/home/Home'
import { IPromotionItem } from '@/interfaces/promotion-item.interface'
import { EnumSort } from '@/interfaces/sort.interface'
import { ProductService } from '@/services/product/product.service'
import { PromotionService } from '@/services/promotion/promotion.service'
import {
	IProduct,
	EnumProductType,
} from '@/shared/interfaces/product.interface'
import { GetStaticProps } from 'next'

export default function HomePage({
	products,
	promotions,
}: {
	products: {
		newProducts: IProduct[]
		popularProducts: IProduct[]
		markdownProducts: IProduct[]
	}
	promotions: IPromotionItem[]
}) {
	return <Home products={products} promotions={promotions} />
}

export const getStaticProps: GetStaticProps = async () => {
	const {
		data: { products: newProducts },
	} = await ProductService.getFoundProducts({
		limit: 8,
		sortBy: EnumSort.NEWEST,
		page: 1,
	})

	const {
		data: { products: popularProducts },
	} = await ProductService.getFoundProducts({
		limit: 8,
		sortBy: EnumSort.POPULARITY,
		page: 1,
	})

	const {
		data: { products: markdownProducts },
	} = await ProductService.getAll(EnumProductType.MARKDOWN, {
		limit: 8,
		sortBy: EnumSort.POPULARITY,
		page: 1,
		minPrice: 0,
		maxPrice: 10000,
	})

	const { data: promotions } = await PromotionService.getAll()

	return {
		props: {
			products: {
				newProducts,
				popularProducts,
				markdownProducts,
			},
			promotions: promotions,
		},
		revalidate: 86400,
	}
}
