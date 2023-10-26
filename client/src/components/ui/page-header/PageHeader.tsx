import Link from 'next/link'
import s from './page-header.module.scss'
import { FC } from 'react'
import { IPageHeader } from '@/shared/interfaces/page-header.interface'

const PageHeader: FC<IPageHeader> = ({ title, tags }) => {
	return (
		<div className={s.header}>
			<h1>{title}</h1>
			<ul className={s.list}>
				<li>
					<Link href={'/'}>Головна</Link>
				</li>
				{tags?.map((tag, index) => (
					<li key={index}>
						<Link href={tag.link}>{tag.title}</Link>
					</li>
				))}
				<li>{title}</li>
			</ul>
		</div>
	)
}

export default PageHeader
