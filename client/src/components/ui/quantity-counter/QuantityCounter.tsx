import QuantityCounterButton from './quantity-counter-button/QuantityCounterButton'
import s from './quantity-counter.module.scss'
import { FC } from 'react'
import { IQuantityCounterType } from '@/components/ui/quantity-counter/change-quantity.type'

interface IQuantityCounter {
	quantity: number
	handleQuantity: (type: IQuantityCounterType) => void
}

const QuantityCounter: FC<IQuantityCounter> = ({
	quantity,
	handleQuantity,
}) => {
	return (
		<div className={s.counter}>
			<QuantityCounterButton
				type="minus"
				onClick={() => handleQuantity('minus')}
			/>
			<div className={s.value}>
				<span>{quantity}</span>
			</div>
			<QuantityCounterButton
				type="plus"
				onClick={() => handleQuantity('plus')}
			/>
		</div>
	)
}

export default QuantityCounter
