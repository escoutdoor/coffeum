import Text from '@/components/ui/heading/text/Text'
import s from './payment-section-item.module.scss'
import { IPaymentSectionItem } from '@/interfaces/payment-section.interface'
import { FC } from 'react'
import MiddleTitle from '@/components/ui/heading/middle-title/MiddleTitle'

const PaymentSectionItem: FC<IPaymentSectionItem> = ({ title, text, Icon }) => {
	return (
		<section className={s.item}>
			<Icon />
			<MiddleTitle>{title}</MiddleTitle>
			{text && (
				<Text
					style={{
						marginTop: '10px',
					}}
				>
					{text}
				</Text>
			)}
		</section>
	)
}

export default PaymentSectionItem
