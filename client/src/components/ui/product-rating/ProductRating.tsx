import { Rating, RoundedStar } from '@smastrom/react-rating'
import s from './product-rating.module.scss'
import { FC } from 'react'

interface IProductRating {
	value?: number
	isReadOnly?: boolean
	onChange?: (value: number) => void
}

const ProductRating: FC<IProductRating> = ({ value, isReadOnly, onChange }) => {
	const ratingStars = {
		itemShapes: RoundedStar,
		activeFillColor: '#f05c2d',
		inactiveFillColor: '#d3d3d3',
	}

	return (
		<div className={s.rating__wrapper} title={value?.toString()}>
			<Rating
				className={s.rating}
				halfFillMode="svg"
				readOnly={isReadOnly ?? true}
				value={value ?? 0}
				onChange={onChange}
				itemStyles={ratingStars}
			/>
		</div>
	)
}

export default ProductRating
