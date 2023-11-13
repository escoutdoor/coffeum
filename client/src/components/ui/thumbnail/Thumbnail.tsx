import s from './thumbnail.module.scss'
import RemoveButton from '@/components/ui/remove-button/RemoveButton'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

interface IThumbnail {
	productId: string
	image: string
	remove?: () => void
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
					width={0}
					height={0}
					sizes="100vw"
					alt={`product image ${productId}`}
				/>
			</Link>
			{remove && <RemoveButton remove={remove} />}
		</div>
	)
}

export default Thumbnail
