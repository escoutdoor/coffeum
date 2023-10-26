import s from './favorite-list.module.scss'
import { FC } from 'react'
import FavoriteItem from './favorite-item/FavoriteItem'
import { useFavorites } from '@/hooks/useFavorites'

const FavoriteList: FC = () => {
	const { favorites } = useFavorites()

	return (
		<>
			{favorites.map(f => (
				<FavoriteItem key={f.id} item={f} />
			))}
		</>
	)
}

export default FavoriteList
