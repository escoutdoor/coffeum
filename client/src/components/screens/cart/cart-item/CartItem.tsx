import s from './cart-item.module.scss'
import MiddleTitle from '@/components/ui/heading/middle-title/MiddleTitle'
import Text from '@/components/ui/heading/text/Text'
import QuantityCounter from '@/components/ui/quantity-counter/QuantityCounter'
import { IQuantityCounterType } from '@/components/ui/quantity-counter/change-quantity.type'
import ProductName from '@/components/ui/table/product-name/ProductName'
import Thumbnail from '@/components/ui/thumbnail/Thumbnail'
import { useActions } from '@/hooks/useActions'
import ICartItem from '@/shared/interfaces/cart-item.interface'
import { FC } from 'react'

const CartItem: FC<ICartItem> = ({ id, product, quantity }) => {
	const { changeQuantity } = useActions()

	const totalPrice = product.discountedPrice * quantity

	const { removeFromCart } = useActions()

	const handleQuantity = (type: IQuantityCounterType) => {
		changeQuantity({ type, id })
	}

	return (
		<tr className={s.item}>
			<td>
				<div className={s.product}>
					<Thumbnail
						productId={product.id}
						remove={() => removeFromCart({ id })}
						image={`/images/img/products/${
							product.image ? product.image : 'no-image.jpg'
						}`}
					/>
					<ProductName product={product} />
				</div>
			</td>
			<td>
				<Text>{product.discountedPrice} ₴</Text>
			</td>
			<td className={s.counter}>
				<QuantityCounter
					quantity={quantity}
					handleQuantity={handleQuantity}
				/>
			</td>
			<td>
				<div className={s.details}>
					<MiddleTitle>{totalPrice} ₴</MiddleTitle>
				</div>
			</td>
		</tr>
	)
}

export default CartItem
