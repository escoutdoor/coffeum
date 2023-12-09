import s from './promotion-image.module.scss'
import { FC } from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface IPromotionImage {
	imagePath: string
	promotionId: string
	title: string
}

const PromotionImage: FC<IPromotionImage> = ({
	imagePath,
	promotionId,
	title,
}) => {
	return (
		<Link href={`/promotions/${promotionId}`}>
			<Image
				priority
				src={`/images/img/promotions/${imagePath}`}
				alt={imagePath}
				title={title}
				width={853}
				height={455}
				className={s.image}
			/>
		</Link>
	)
}

export default PromotionImage
