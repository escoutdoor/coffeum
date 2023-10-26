import HeaderBottom from './header-bottom/HeaderBottom'
import HeaderTop from './header-top/HeaderTop'
import s from './header.module.scss'
import { FC } from 'react'

const Header: FC = () => {
	return (
		<div className={s.header}>
			<div className="wrapper">
				<HeaderTop />
				<HeaderBottom />
			</div>
		</div>
	)
}

export default Header
