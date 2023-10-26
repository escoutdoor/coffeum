import s from './category.module.scss'
import { ICategoryMain } from '@/helpers/categories'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

const Category: FC<ICategoryMain> = ({ id, title, image, link }) => {
	return (
		<Link href={link} className={s.category}>
			<Image src={image} width={204} height={204} alt="category" />
			<p className={s.title}>{title}</p>
		</Link>
	)
}

export default Category
