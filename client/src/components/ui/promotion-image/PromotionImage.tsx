import Image from 'next/image'
import s from './promotion-image.module.scss'
import Link from 'next/link'
import { FC } from 'react'

interface IPromotionImage {
	image: string
	promotionId: string
	title: string
}

const PromotionImage: FC<IPromotionImage> = ({ image, promotionId, title }) => {
	return (
		<Link href={`/promotions/${promotionId}`}>
			<Image priority src={image} alt={title} width={853} height={455} className={s.image} />
		</Link>
	)
}

export default PromotionImage
