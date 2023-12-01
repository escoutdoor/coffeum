import s from './dashboard-list-item.module.scss'
import { FC, PropsWithChildren, useState } from 'react'
import { FaAngleDown } from 'react-icons/fa6'
import Miniature from '@/components/ui/miniature/Miniature'
import MiddleTitle from '@/components/ui/heading/middle-title/MiddleTitle'

interface IDashboardListItem {
	title: string
	image: string
}

const DashboardListItem: FC<PropsWithChildren<IDashboardListItem>> = ({
	title,
	image,
	children: menu,
}) => {
	const [active, setActive] = useState<boolean>(false)

	return (
		<li
			className={active ? `${s.item} ${s.active}` : s.item}
			onClick={() => setActive(!active)}
		>
			<div className={s.preview}>
				<div className={s.left}>
					<Miniature src={image} />
					<MiddleTitle>{title}</MiddleTitle>
				</div>
				<FaAngleDown className={s.icon} />
			</div>

			<div className={s.dropdown} onClick={e => e.stopPropagation()}>
				{menu}
			</div>
		</li>
	)
}

export default DashboardListItem
