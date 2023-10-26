import MiddleTitle from '@/components/ui/heading/middle-title/MiddleTitle'
import s from './delivery-details.module.scss'
import { FC } from 'react'
import Text from '@/components/ui/heading/text/Text'
import { deliveryCities } from '@/helpers/delivery-cities'
import TitleBar from './title-bar/TitleBar'

const DeliveryDetails: FC = () => {
	return (
		<div className={s.block}>
			<MiddleTitle
				style={{
					lineHeight: '32px',
					marginBottom: '20px',
				}}
			>
				Швидка та надійна доставка товарів по Україні
			</MiddleTitle>
			<Text
				style={{
					marginBottom: '10px',
				}}
			>
				Доставка товарів по Києву здійснюється нашою кур'єрською
				службою. Товари до міст України доставляються через службу
				доставки «Нова Пошта».
			</Text>
			<ul className={s.delivery__cities}>
				{deliveryCities.map(city => (
					<TitleBar key={city} title={city} />
				))}
			</ul>
		</div>
	)
}

export default DeliveryDetails
