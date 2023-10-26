import { HiMiniXMark } from 'react-icons/hi2'
import s from './remove-button.module.scss'
import { FC } from 'react'

type RemoveButtonProps = {
	remove?: () => void
}

const RemoveButton: FC<RemoveButtonProps> = ({ remove }) => {
	return (
		<button className={s.remove__button} onClick={remove}>
			<HiMiniXMark />
		</button>
	)
}

export default RemoveButton
