import s from './slider.module.scss'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation, Autoplay } from 'swiper/modules'
import Image from 'next/image'
import Link from 'next/link'
import CarouselButtons from '../carousel-buttons/CarouselButtons'
import { IPromotionItem } from '@/interfaces/promotion-item.interface'

const Slider = ({ promotions }: { promotions: IPromotionItem[] }) => {
	return (
		<div className={s.block}>
			<Swiper
				className={s.swiper}
				modules={[Pagination, Navigation, Autoplay]}
				autoplay={{ delay: 10000, disableOnInteraction: false }}
			>
				{promotions?.map(item => (
					<SwiperSlide key={item.id}>
						<Link href={`/promotions/${item.id}`}>
							<Image
								src={`/images/img/promotions/${item.imagePath}`}
								width={0}
								priority
								height={0}
								sizes="100vw"
								alt="image"
								className={s.image}
							/>
						</Link>
					</SwiperSlide>
				))}
				<CarouselButtons />
			</Swiper>
		</div>
	)
}

export default Slider
