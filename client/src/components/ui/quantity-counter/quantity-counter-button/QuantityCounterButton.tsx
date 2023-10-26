import { useActions } from '@/hooks/useActions'
import s from './quantity-counter-button.module.scss'
import { FC } from 'react'
import { IQuantityCounterType } from '../change-quantity.type'

interface IQuantityCounterButton {
	type: IQuantityCounterType
	onClick: () => void
}

const QuantityCounterButton: FC<IQuantityCounterButton> = ({ type, onClick }) => {
	return (
		<button className={s.button} onClick={onClick}>
			{type === 'plus' ? '+' : '-'}
		</button>
	)
}

export default QuantityCounterButton
