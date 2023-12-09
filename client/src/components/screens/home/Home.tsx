import s from './home.module.scss'
import Layout from '@/components/layout/Layout'
import Advantages from './advantages/Advantages'
import Categories from './categories/Categories'

import CategoryCarousel from './category-carousel/CategoryCarousel'
import Catalog from './catalog/Catalog'
import Slider from './slider/Slider'

import { catalog } from '@/helpers/catalog'
import CarouselWithTitle from '@/components/ui/carousel-with-title/CarouselWithTitle'
import { IProduct } from '@/shared/interfaces/product.interface'
import { IPromotionItem } from '@/interfaces/promotion-item.interface'

const Home = ({
	products,
	promotions,
}: {
	products: {
		newProducts: IProduct[]
		popularProducts: IProduct[]
		markdownProducts: IProduct[]
	}
	promotions: IPromotionItem[]
}) => {
	return (
		<Layout
			title="Головна"
			description="Захоплюючий світ кави та незамінні аксесуари для справжніх поціновувачів. "
		>
			<div className={s.home}>
				<Slider promotions={promotions} />
				<Advantages />
				<Categories />
				<CarouselWithTitle
					title="знижки"
					products={products.markdownProducts}
				/>
				<div className={s.carousels}>
					<CategoryCarousel
						title="популярні товари"
						products={products.popularProducts}
					/>
					<CategoryCarousel
						title="нові надходження"
						products={products.newProducts}
					/>
					<CategoryCarousel
						title="уцінка"
						products={products.markdownProducts}
					/>
				</div>
				<div className={s.sections}>
					<Catalog
						sections={catalog}
						title="«Кофєум» – кава, кавомашини, аксесуари"
					/>
				</div>
			</div>
		</Layout>
	)
}

export default Home
