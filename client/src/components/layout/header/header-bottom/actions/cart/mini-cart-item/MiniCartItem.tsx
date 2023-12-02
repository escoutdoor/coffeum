import ICartItem from '@/shared/interfaces/cart-item.interface'
import s from './mini-cart-item.module.scss'
import { FC } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import RemoveButton from '@/components/ui/remove-button/RemoveButton'
import Thumbnail from '@/components/ui/thumbnail/Thumbnail'
import { useActions } from '@/hooks/useActions'
import ProductLinkTitle from '@/components/ui/heading/product-link-title/ProductLinkTitle'
import SmallText from '@/components/ui/heading/small-text/SmallText'

interface IMiniCartItem {
	item: ICartItem
}

const MiniCartItem: FC<IMiniCartItem> = ({ item }) => {
	const { removeFromCart } = useActions()

	return (
		<div className={s.cart__item}>
			<div className={s.details}>
				<ProductLinkTitle
					href={{
						pathname: '/product/[id]',
						query: { id: item.product.id },
					}}
				>
					{item.product.name}
				</ProductLinkTitle>
				<SmallText>
					{item.quantity} × {item.product.discountedPrice} ₴
				</SmallText>
			</div>
			<Thumbnail
				productId={item.product.id}
				image={`/images/img/products/${
					item.product.image ? item.product.image : 'no-image.jpg'
				}`}
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
