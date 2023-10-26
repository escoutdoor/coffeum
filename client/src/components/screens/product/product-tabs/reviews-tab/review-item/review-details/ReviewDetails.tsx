import { getTime } from '@/utils/time'
import s from './review-details.module.scss'
import { FC } from 'react'
import MiddleTitle from '@/components/ui/heading/middle-title/MiddleTitle'
import ProductRating from '@/components/ui/product-rating/ProductRating'
import Text from '@/components/ui/heading/text/Text'

interface IReviewDetails {
	name: string
	createdAt: Date | string
	rating: number
	text: string
}

const ReviewDetails: FC<IReviewDetails> = ({
	name,
	createdAt,
	rating,
	text,
}) => {
	return (
		<div className={s.details}>
			<div className={s.header}>
				<MiddleTitle>{name}</MiddleTitle>
				<span>{getTime(createdAt)}</span>
			</div>
			<ProductRating value={rating} />
			<Text>{text}</Text>
		</div>
	)
}

export default ReviewDetails
