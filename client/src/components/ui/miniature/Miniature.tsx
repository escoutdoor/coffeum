import Image from 'next/image'
import s from './miniature.module.scss'

const Miniature = ({ src }: { src: string }) => {
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

export default Miniature
