import { FC } from 'react'
import s from './send-button.module.scss'

const SendButton: FC = () => {
	return (
		<button className={s.button} type="submit">
			Надіслати
		</button>
	)
}

export default SendButton
