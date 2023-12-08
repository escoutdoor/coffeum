import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation, Autoplay } from 'swiper/modules'
import s from './slider.module.scss'
import { FC } from 'react'
import { slider } from '@/helpers/home-slider'
import Image from 'next/image'
import Link from 'next/link'
import CarouselButtons from '../carousel-buttons/CarouselButtons'

const Slider: FC = () => {
	return (
		<div className={s.block}>
			<Swiper
				className={s.swiper}
				modules={[Pagination, Navigation, Autoplay]}
				autoplay={{ delay: 10000, disableOnInteraction: false }}
			>
				{slider.map(item => (
					<SwiperSlide key={item.id}>
						<Link href={item.link}>
							<Image
								src={`/images/img/home/slider/${item.image}`}
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
