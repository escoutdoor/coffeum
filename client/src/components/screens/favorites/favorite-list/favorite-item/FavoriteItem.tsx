import Thumbnail from '@/components/ui/thumbnail/Thumbnail'
import s from './favorite-item.module.scss'
import { FC } from 'react'
import Link from 'next/link'
import MiddleTitle from '@/components/ui/heading/middle-title/MiddleTitle'
import Text from '@/components/ui/heading/text/Text'
import FavoriteItemButton from './favorite-item-button/FavoriteItemButton'
import { useToggleFavorite } from '@/hooks/useToggleFavorite'
import { useAuth } from '@/hooks/useAuth'
import { useActions } from '@/hooks/useActions'
import { IFavorite } from '@/shared/interfaces/favorite.interface'
import { getTime } from '@/utils/time'
import ProductName from '@/components/ui/table/product-name/ProductName'

const FavoriteItem: FC<{ item: IFavorite }> = ({ item }) => {
	const { user } = useAuth()
	const { mutate: toggleFavorite } = useToggleFavorite()
	const { toggleFavorites } = useActions()

	return (
		<tr className={s.item}>
			<td>
				<div className={s.product}>
					<Thumbnail
						productId={item.product.id}
						remove={() =>
							user
								? toggleFavorite(item.product.id)
								: toggleFavorites({ product: item.product })
						}
						image={`/images/img/products/${
							item.product.image
								? item.product.image
								: 'no-image.jpg'
						}`}
					/>
					<ProductName product={item.product} />
				</div>
			</td>
			<td>
				<Text>{item.product.discountedPrice} ₴</Text>
			</td>
			<td>
				<MiddleTitle>{getTime(item.createdAt)}</MiddleTitle>
			</td>
			<td>
				<FavoriteItemButton product={item.product} />
			</td>
		</tr>
	)
}

export default FavoriteItem
