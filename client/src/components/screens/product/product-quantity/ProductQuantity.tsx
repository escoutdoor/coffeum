import s from './product-quantity.module.scss'
import QuantityCounter from '@/components/ui/quantity-counter/QuantityCounter'
import { useActions } from '@/hooks/useActions'
import { FC, useState } from 'react'
import AddToCartButton from '../add-to-cart-button/AddToCartButton'
import { IProduct } from '@/shared/interfaces/product.interface'
import { IQuantityCounterType } from '@/components/ui/quantity-counter/change-quantity.type'
import { FaRegFaceSadTear } from 'react-icons/fa6'
import SectionTitle from '@/components/ui/heading/section-title/SectionTitle'

const ProductQuantity: FC<{ product: IProduct }> = ({ product }) => {
	const [quantity, setQuantity] = useState(1)
	const { addToCart } = useActions()

	const handleQuantity = (type: IQuantityCounterType) => {
		if (type === 'plus') {
			setQuantity(quantity + 1)
		} else {
			if (quantity > 1) {
				setQuantity(quantity - 1)
			}
		}
	}

	return (
		<div className={s.quantity}>
			{product.quantity ? (
				<>
					<QuantityCounter
						quantity={quantity}
						handleQuantity={handleQuantity}
					/>
					<AddToCartButton
						addToCart={() =>
							addToCart({
								product,
								quantity,
							})
						}
					/>
				</>
			) : (
				<div className={s.not__available}>
					<SectionTitle>Немає в наявності</SectionTitle>
					<FaRegFaceSadTear />
				</div>
			)}
		</div>
	)
}

export default ProductQuantity
