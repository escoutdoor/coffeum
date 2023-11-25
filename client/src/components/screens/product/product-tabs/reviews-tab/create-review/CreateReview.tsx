import s from './create-review.module.scss'
import { FC } from 'react'
import ProductRating from '@/components/ui/product-rating/ProductRating'
import { useCreateReview } from '@/hooks/useCreateReview'
import { useProfile } from '@/hooks/useProfile'
import { useRouter } from 'next/router'
import { SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { TReview, reviewSchema } from '@/lib/schemas/review.schema'
import ErrorText from '@/components/ui/error-text/ErrorText'
import TextArea from '@/components/ui/text-area/TextArea'
import SendButton from './send-button/SendButton'

const CreateReview: FC<{ productId: string }> = ({ productId }) => {
	const { profile } = useProfile()
	const { push } = useRouter()

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

	const onSubmit: SubmitHandler<TReview> = data => {
		if (!profile) {
			push('/my-account')
			return
		}

		createReview({
			...data,
			productId,
		})

		reset()
	}

	return (
		<div className={s.block}>
			<p className={s.heading}>Додати відгук</p>
			<form onSubmit={handleSubmit(onSubmit)} className={s.form}>
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
		</div>
	)
}

export default CreateReview
