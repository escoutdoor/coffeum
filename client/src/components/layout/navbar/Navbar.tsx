import s from './navbar.module.scss'
import { FC } from 'react'
import { navigation } from '@/helpers/navbar'
import Link from 'next/link'
import { useRouter } from 'next/router'
import NavbarMenu from './navbar-menu/NavbarMenu'

const Navbar: FC = () => {
	const { asPath } = useRouter()

	return (
		<div className={s.navbar}>
			<div className="wrapper">
				<div className={s.content}>
					<ul className={s.list}>
						<NavbarMenu />
						{navigation.map(item => (
							<li
								className={
									asPath.includes(item.link)
										? `${s.list__item} ${s.active}`
										: s.list__item
								}
								key={item.id}
							>
								<Link href={item.link}>{item.title}</Link>
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	)
}

export default Navbar
