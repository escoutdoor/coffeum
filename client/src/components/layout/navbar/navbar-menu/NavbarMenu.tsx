import { headerMenu } from '@/helpers/navbar'
import s from './navbar-menu.module.scss'
import { FC } from 'react'
import { RiMenu4Fill } from 'react-icons/ri'
import { HiMiniChevronRight } from 'react-icons/hi2'
import Link from 'next/link'
import NavbarSub from './navbar-sub/NavbarSub'
import { useRouter } from 'next/router'

const NavbarMenu: FC = () => {
	const { pathname } = useRouter()

	return (
		<div className={s.block}>
			<div
				className={
					pathname === '/' ? `${s.title} ${s.active}` : s.title
				}
			>
				<RiMenu4Fill />
				Каталог
			</div>
			<ul className={pathname === '/' ? `${s.menu} ${s.active}` : s.menu}>
				{headerMenu.map(item => (
					<li className={s.menu__item} key={item.id}>
						<Link className={s.side__title} href={item.link}>
							{item.title}
							<HiMiniChevronRight />
						</Link>
						<ul>
							{item.subcategories.map(sub => (
								<NavbarSub
									key={sub.id}
									id={sub.id}
									pathname={item.link}
									title={sub.title}
									list={sub.list}
								/>
							))}
						</ul>
					</li>
				))}
			</ul>
		</div>
	)
}

export default NavbarMenu
