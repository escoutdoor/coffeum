import ICartItem from '@/shared/interfaces/cart-item.interface'
import s from './mini-cart-item.module.scss'
import { FC } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import RemoveButton from '@/components/ui/remove-button/RemoveButton'
import Thumbnail from '@/components/ui/thumbnail/Thumbnail'
import { useActions } from '@/hooks/useActions'

interface IMiniCartItem {
	item: ICartItem
}

const MiniCartItem: FC<IMiniCartItem> = ({ item }) => {
	const { removeFromCart } = useActions()

	return (
		<div className={s.cart__item}>
			<div className={s.details}>
				<Link
					href={{
						pathname: '/product/[id]',
						query: { id: item.product.id },
					}}
				>
					{item.product.name}
				</Link>
				<p>
					{item.quantity} × {item.product.discountedPrice} ₴
				</p>
			</div>
			<Thumbnail
				productId={item.product.id}
				image={`/images/img/products/${item.product.image ? item.product.image : 'no-image.jpg'}`}
				remove={() =>
					removeFromCart({
						id: item.id,
					})
				}
			/>
		</div>
	)
}

export default MiniCartItem
