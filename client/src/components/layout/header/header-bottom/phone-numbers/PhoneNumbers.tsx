import s from './phone-numbers.module.scss'
import { FC } from 'react'
import { BsTelephone } from 'react-icons/bs'

const PhoneNumbers: FC = () => {
	return (
		<div className={s.block}>
			<BsTelephone color="#fff" size="30" />
			<div className={s.numbers}>
				<a href="tel:80508698694">000 000-000-0</a>
				<a href="tel:80971831832">111 111-111-1</a>
			</div>
		</div>
	)
}

export default PhoneNumbers
