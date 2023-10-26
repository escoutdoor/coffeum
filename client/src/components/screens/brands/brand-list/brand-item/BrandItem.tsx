import { IBrandPreview } from '@/interfaces/brand-preview.interface'
import s from './brand-item.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

const BrandItem: FC<IBrandPreview> = ({ name, image }) => {
	return (
		<Link href={`/brands/${name}`} className={s.brand}>
			<div className={s.content}>
				<Image src={image} width={80} height={80} alt="brand-logo" />
				<h1>{name}</h1>
			</div>
		</Link>
	)
}

export default BrandItem
