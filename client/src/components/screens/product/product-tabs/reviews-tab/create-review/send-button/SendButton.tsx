import { FC } from 'react'
import s from './send-button.module.scss'

<<<<<<< HEAD
const SendButton: FC = () => {
	return (
		<button className={s.button} type="submit">
=======
const SendButton: FC<{ onClick: () => void }> = ({ onClick }) => {
	return (
		<button className={s.button} onClick={onClick}>
>>>>>>> 5159a9b674539dc2e2001b7e508ac086cc645379
			Надіслати
		</button>
	)
}

export default SendButton
