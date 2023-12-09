import s from './dashboard-navigation-item.module.scss'
import { IDashboardRoute } from '@/interfaces/dashboard-route.interface'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const DashboardNavigationItem = ({ item }: { item: IDashboardRoute }) => {
	const pathname = usePathname()

	return (
		<li
			className={
				pathname === `${item.href}` ? `${s.item} ${s.active}` : s.item
			}
		>
			<Link href={item.href}>
				<item.Icon className={s.icon} />
				<span className={s.title}>{item.title}</span>
			</Link>
		</li>
	)
}

export default DashboardNavigationItem
