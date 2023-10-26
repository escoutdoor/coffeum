import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'
import s from './add-to-favorites-button.module.scss'
import { FC } from 'react'

const AddToFavoritesButton: FC<{
	isFavorite: boolean
	onClick: () => void
}> = ({ isFavorite, onClick }) => {
	return (
		<div
			className={
				isFavorite
					? `${s.favorite__button} ${s.active}`
					: s.favorite__button
			}
			onClick={onClick}
		>
			{isFavorite ? <AiFillHeart /> : <AiOutlineHeart />}
			<span>Додати в закладки</span>
		</div>
	)
}

export default AddToFavoritesButton
