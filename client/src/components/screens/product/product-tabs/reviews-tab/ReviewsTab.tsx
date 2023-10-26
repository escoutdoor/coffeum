import s from './review-tab.module.scss'
import { IReview } from '@/shared/interfaces/product.interface'
import { FC } from 'react'
import ReviewItem from './review-item/ReviewItem'
import CreateReview from './create-review/CreateReview'

const ReviewsTab: FC<{ reviews: IReview[] | undefined; productId: string }> = ({
	reviews,
	productId,
}) => {
	return (
		<div className={s.reviews}>
			<p className={s.title}>Відгуки</p>
			{!reviews?.length && (
				<p className={s.no__results}>Відгуків немає, поки що.</p>
			)}

			<ul className={s.list}>
				{reviews?.map(review => (
					<ReviewItem key={review.id} review={review} />
				))}
			</ul>
			<CreateReview productId={productId} />
		</div>
	)
}

export default ReviewsTab
