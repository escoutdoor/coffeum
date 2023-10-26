import s from './thumbnail.module.scss'
import RemoveButton from '@/components/ui/remove-button/RemoveButton'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

interface IThumbnail {
	productId: string
	image: string
	remove: () => void
}

const Thumbnail: FC<IThumbnail> = ({ productId, image, remove }) => {
	return (
		<div className={s.thumbnail}>
			<Link
				href={{
					pathname: '/product/[id]',
					query: { id: productId },
				}}
			>
				<Image
					src={image}
					width={84}
					height={84}
					alt="cart-item-image"
				/>
			</Link>
			<RemoveButton remove={remove} />
		</div>
	)
}

export default Thumbnail
