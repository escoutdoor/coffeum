import s from './carousel-buttons.module.scss'
import { FC } from 'react'
import { useSwiper } from 'swiper/react'
import { HiMiniChevronRight, HiMiniChevronLeft } from 'react-icons/hi2'

const CarouselButtons: FC = () => {
	const swiper = useSwiper()

	return (
		<div className={s.buttons}>
			<div onClick={() => swiper.slidePrev()} className={s.button}>
				<HiMiniChevronLeft />
			</div>
			<div onClick={() => swiper.slideNext()} className={s.button}>
				<HiMiniChevronRight />
			</div>
		</div>
	)
}

export default CarouselButtons
