import { Rating, RoundedStar } from '@smastrom/react-rating'
import s from './product-rating.module.scss'
<<<<<<< HEAD
import { FC, forwardRef } from 'react'
=======
import { FC } from 'react'
>>>>>>> 5159a9b674539dc2e2001b7e508ac086cc645379
import { useAvgRating } from '@/hooks/useAvgRating'

interface IProductRating {
	productId?: string
<<<<<<< HEAD
	value?: number
	isReadOnly?: boolean
	onChange?: (value: number) => void
}

const ProductRating: FC<IProductRating> = ({
	productId,
	value,
	isReadOnly,
	onChange,
}) => {
=======
	value?: number | undefined
	onChange?: (value: number) => void
}

const ProductRating: FC<IProductRating> = ({ productId, value, onChange }) => {
>>>>>>> 5159a9b674539dc2e2001b7e508ac086cc645379
	const ratingStars = {
		itemShapes: RoundedStar,
		activeFillColor: '#f05c2d',
		inactiveFillColor: '#d3d3d3',
	}

	const { data: rating } = useAvgRating(productId as string)

	return (
		<div className={s.rating__wrapper} title={value?.toString()}>
			<Rating
				className={s.rating}
				halfFillMode="svg"
<<<<<<< HEAD
				readOnly={isReadOnly ?? true}
				value={value ?? rating ?? 0}
				onChange={onChange}
				itemStyles={ratingStars}
=======
				readOnly={onChange ? false : true}
				value={value || rating || 0}
				itemStyles={ratingStars}
				onChange={onChange}
>>>>>>> 5159a9b674539dc2e2001b7e508ac086cc645379
			/>
		</div>
	)
}

export default ProductRating
