import { paymentTypes } from '@/helpers/payment-types'
import s from './payment-section.module.scss'
import { FC } from 'react'
import PaymentSectionItem from './payment-section-item/PaymentSectionItem'
import SectionTitle from '@/components/ui/heading/section-title/SectionTitle'

const PaymentSection: FC = () => {
	return (
		<div className={s.block}>
			<SectionTitle>Способи оплати</SectionTitle>
			<div className={s.types}>
				{paymentTypes.map(item => (
					<PaymentSectionItem
						key={item.id}
						id={item.id}
						title={item.title}
						text={item.text}
						Icon={item.Icon}
					/>
				))}
			</div>
		</div>
	)
}

export default PaymentSection
