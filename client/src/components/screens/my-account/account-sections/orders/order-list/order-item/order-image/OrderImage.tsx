import s from './order-image.module.scss'
import Image from 'next/image'

const OrderImage = ({ src }: { src: string }) => {
	return (
		<Image
			width={50}
			height={50}
			src={src}
			alt={`product image ${src}`}
			className={s.image}
		/>
	)
}

export default OrderImage
