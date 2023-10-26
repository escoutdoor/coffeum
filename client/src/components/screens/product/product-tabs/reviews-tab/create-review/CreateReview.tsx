import s from './create-review.module.scss'
<<<<<<< HEAD
import { FC } from 'react'
import ProductRating from '@/components/ui/product-rating/ProductRating'
=======
import { FC, useState } from 'react'
import ProductRating from '@/components/ui/product-rating/ProductRating'
import ReviewText from './review-text/ReviewText'
>>>>>>> 5159a9b674539dc2e2001b7e508ac086cc645379
import SendButton from './send-button/SendButton'
import { useCreateReview } from '@/hooks/useCreateReview'
import { useProfile } from '@/hooks/useProfile'
import { useRouter } from 'next/router'
<<<<<<< HEAD
import { SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { TReview, reviewSchema } from '@/lib/schemas/review'
import ErrorText from '@/components/ui/error-text/ErrorText'
import TextArea from '@/components/ui/text-area/TextArea'
=======
>>>>>>> 5159a9b674539dc2e2001b7e508ac086cc645379

const CreateReview: FC<{ productId: string }> = ({ productId }) => {
	const { profile } = useProfile()
	const { push } = useRouter()

<<<<<<< HEAD
	const { createReview } = useCreateReview(productId)

	const {
		register,
		formState: { errors },
		handleSubmit,
		reset,
		setValue,
		watch,
	} = useForm<TReview>({
		mode: 'onChange',
		resolver: zodResolver(reviewSchema),
	})

	const onSumbit: SubmitHandler<TReview> = data => {
		if (!profile) {
			push('/my-account')
			return
		}

		createReview({
			...data,
			productId,
			authorId: profile?.id,
		})

		reset()
=======
	const [review, setReview] = useState<{ text: string; rating: number }>({
		text: '',
		rating: 0,
	})

	const { mutate: createReview } = useCreateReview(productId)

	const handleSubmit = () => {
		if (profile) {
			createReview({
				authorId: profile?.id,
				text: review.text,
				rating: review.rating,
				productId,
			})
		} else {
			push('/my-account')
		}

		setReview({ text: '', rating: 0 })
>>>>>>> 5159a9b674539dc2e2001b7e508ac086cc645379
	}

	return (
		<div className={s.block}>
			<p className={s.heading}>Додати відгук</p>
<<<<<<< HEAD
			<form onSubmit={handleSubmit(onSumbit)} className={s.form}>
				<label>
					<h1 className={s.title}>Ваша оцінка</h1>
					<span className={s.required}>*</span>
				</label>
				<ProductRating
					value={watch('rating')}
					onChange={e => setValue('rating', e)}
					isReadOnly={false}
				/>
				<ErrorText>{errors.rating?.message}</ErrorText>
				<TextArea
					label="Ваш відгук"
					{...register('text')}
					error={errors.text?.message}
					required
				/>
				<SendButton />
			</form>
=======
			<div className={s.form}>
				<h1 className={s.title}>Ваша оцінка *</h1>
				<ProductRating
					value={review.rating}
					onChange={e => setReview({ ...review, rating: e })}
				/>
				<h1 className={s.title}>Ваш відгук *</h1>
				<ReviewText
					text={review.text}
					handleText={e => setReview({ ...review, text: e })}
				/>
			</div>
			<SendButton onClick={() => handleSubmit()} />
>>>>>>> 5159a9b674539dc2e2001b7e508ac086cc645379
		</div>
	)
}

export default CreateReview
