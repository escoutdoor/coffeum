import s from './product-details.module.scss'
import { FC } from 'react'
import { IProduct } from '@/shared/interfaces/product.interface'
import { useFavorites } from '@/hooks/useFavorites'
import ProductRating from '@/components/ui/product-rating/ProductRating'
import ProductPrice from '@/components/ui/product-price/ProductPrice'
import ProductQuantity from '../product-quantity/ProductQuantity'
import SocialIcons from '@/components/ui/social-icons/SocialIcons'
import AddToFavoritesButton from '../add-to-favorites-button/AddToFavoritesButton'
import { useToggleFavorite } from '@/hooks/useToggleFavorite'
import { useAuth } from '@/hooks/useAuth'
import { useActions } from '@/hooks/useActions'
import { getAverageRating } from '@/utils/avg-rating'

const ProductDetails: FC<{ product: IProduct }> = ({ product }) => {
	const { user } = useAuth()
	const { favorites } = useFavorites()

	const { mutate: toggleFavoriteDB } = useToggleFavorite()
	const { toggleFavorites } = useActions()

	const isFavorite = favorites.some(f => f.product.id === product.id)

	return (
		<div className={s.details}>
			<h1 className={s.title}>{product.name}</h1>
			<ProductRating value={getAverageRating(product.reviews)} />
			<ProductPrice
				originalPrice={product.originalPrice}
				discountedPrice={product.discountedPrice}
				size="lg"
			/>

			<ProductQuantity product={product} />

			<div className={s.share}>
				<SocialIcons dark />
				<AddToFavoritesButton
					isFavorite={isFavorite}
					onClick={() =>
						user
							? toggleFavoriteDB(product.id)
							: toggleFavorites({ product })
					}
				/>
			</div>
		</div>
	)
}

export default ProductDetails
