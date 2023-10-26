import MiddleTitle from '@/components/ui/heading/middle-title/MiddleTitle'
import s from './advantages.module.scss'
import { FC } from 'react'
import { TbTruckDelivery } from 'react-icons/tb'
import { CiDeliveryTruck } from 'react-icons/ci'
import { GoClock } from 'react-icons/go'

const Advantages: FC = () => {
	return (
		<div className={s.block}>
			<div className={s.block__item}>
				<TbTruckDelivery />
				<div className={s.details}>
					<MiddleTitle>Доставка по Україні</MiddleTitle>
					<p className={s.description}>
						Вартість доставки у ваш населений пункт згідно тарифів
						служби доставки ” Нова Пошта»
					</p>
				</div>
			</div>
			<div className={s.block__item}>
				<CiDeliveryTruck />
				<div className={s.details}>
					<MiddleTitle>Самовивіз в Києві</MiddleTitle>
					<p className={s.description}>
						Забрати замовлення можна в нашому офісі, попередньо
						забронювавши товари, що Вас цікавлять
					</p>
				</div>
			</div>
			<div className={s.block__item}>
				<GoClock />
				<div className={s.details}>
					<MiddleTitle>Обмін/повернення</MiddleTitle>
					<p className={s.description}>
						14 днів з дня покупки відповідно до «Закону про захист
						прав споживача»
					</p>
				</div>
			</div>
		</div>
	)
}

export default Advantages
