import Image from 'next/image'
import s from './product-image.module.scss'
import { FC } from 'react'

const ProductImage: FC<{ image: string; title: string }> = ({ image, title }) => {
	return <Image priority className={s.image} src={image} width={451} height={451} alt={title} />
}

export default ProductImage
