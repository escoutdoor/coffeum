import s from './review-item.module.scss'
import { IReview } from '@/shared/interfaces/product.interface'
import Image from 'next/image'
import { FC } from 'react'
import ReviewDetails from './review-details/ReviewDetails'
import { getName } from '@/utils/get-name'

const ReviewItem: FC<{ review: IReview }> = ({ review }) => {
	return (
		<li className={s.item}>
			<Image
				className={s.avatar}
				src={`/images/img/avatars/${review.author.avatarPath}`}
				width={80}
				height={80}
				alt={review.author.firstName}
			/>
			<ReviewDetails
				name={getName({
					...review.author,
					surName: review.author.surName || '',
				})}
				rating={review.rating}
				text={review.text}
				createdAt={review.createdAt}
			/>
		</li>
	)
}

export default ReviewItem
