import ICarousel from '@/shared/interfaces/carousel.interface'
import s from './category-carousel.module.scss'
import { FC } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import ProductItem from '@/components/ui/product-item/ProductItem'
import CarouselButtons from '../carousel-buttons/CarouselButtons'
import UpperCaseTitle from '@/components/ui/heading/upper-case-title/UpperCaseTitle'

const CategoryCarousel: FC<ICarousel> = ({ title, products }) => {
	return (
		<div className={s.block}>
			<UpperCaseTitle>{title}</UpperCaseTitle>
			<Swiper
				slidesPerView={1}
				modules={[Pagination, Navigation]}
				className={s.swiper}
			>
				{products.map(product => (
					<SwiperSlide key={product.id}>
						<ProductItem item={product} />
					</SwiperSlide>
				))}
				<CarouselButtons />
			</Swiper>
		</div>
	)
}

export default CategoryCarousel
