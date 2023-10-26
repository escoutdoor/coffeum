import s from './add-to-cart-button.module.scss'
import { FC } from 'react'
import { AiOutlineShopping } from 'react-icons/ai'

const AddToCartButton: FC<{ addToCart: () => void }> = ({ addToCart }) => {
	return (
		<button className={s.button} onClick={addToCart}>
			<AiOutlineShopping />
			<span>Додати в кошик</span>
		</button>
	)
}

export default AddToCartButton
