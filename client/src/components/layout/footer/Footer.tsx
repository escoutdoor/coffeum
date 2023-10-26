import s from './footer.module.scss'
import { FC } from 'react'
import DeliveryDetails from './delivery-details/DeliveryDetails'
import FooterMain from './footer-main/FooterMain'
import FooterBottom from './footer-bottom/FooterBottom'

const Footer: FC = () => {
	return (
		<div className={s.footer}>
			<div className="wrapper">
				<DeliveryDetails />
			</div>
			<FooterMain />
			<div className="wrapper">
				<FooterBottom />
			</div>
		</div>
	)
}

export default Footer
