import s from './navbar-sub.module.scss'
import { IMenuItem } from '@/interfaces/menu.interface'
import Link from 'next/link'
import { FC } from 'react'

const NavbarSub: FC<IMenuItem & { pathname: string }> = ({
	title,
	list,
	pathname,
}) => {
	const includesQuery = pathname.includes('?')

	return (
		<div className={s.sub}>
			<h1>{title}</h1>
			<ul>
				{list.map(l => (
					<li key={l.id}>
						<Link
							href={`${pathname}${includesQuery ? '&' : '?'}${
								l.link
							}`}
						>
							{l.title}
						</Link>
					</li>
				))}
			</ul>
		</div>
	)
}

export default NavbarSub
