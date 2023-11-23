import s from './carousel-with-title.module.scss'
import { FC } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation } from 'swiper/modules'
import ICarousel from '@/shared/interfaces/carousel.interface'
import CarouselButtons from '@/components/screens/home/carousel-buttons/CarouselButtons'
import ProductItem from '@/components/ui/product-item/ProductItem'
import UpperCaseTitle from '@/components/ui/heading/upper-case-title/UpperCaseTitle'

const CarouselWithTitle: FC<ICarousel> = ({ title, products }) => {
	return (
		<div className={s.block}>
			<UpperCaseTitle>{title}</UpperCaseTitle>
			<div className={s.slider}>
				<Swiper
					slidesPerView={4}
					modules={[Pagination, Navigation]}
					className={s.swiper}
				>
					{products.map(product => (
						<SwiperSlide key={product.id} className={s.slide}>
							<ProductItem item={product} />
						</SwiperSlide>
					))}
					<CarouselButtons />
				</Swiper>
			</div>
		</div>
	)
}

export default CarouselWithTitle
