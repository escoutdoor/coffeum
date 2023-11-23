import s from './favorite-list.module.scss'
import FavoriteItem from './favorite-item/FavoriteItem'
import { IFavorite } from '@/shared/interfaces/favorite.interface'

const FavoriteList = ({ favorites }: { favorites: IFavorite[] }) => {
	return (
		<>
			{favorites.map(f => (
				<FavoriteItem key={f.id} item={f} />
			))}
		</>
	)
}

export default FavoriteList
