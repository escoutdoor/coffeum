import { useProfile } from './useProfile'
import { useTypedSelector } from './useTypedSelector'

export const useFavorites = () => {
	const { profile } = useProfile()

	const favorites = useTypedSelector(state => state.favorites.items)

	if (!profile)
		return {
			favorites,
		}

	return {
		favorites: profile.favorites,
	}
}
