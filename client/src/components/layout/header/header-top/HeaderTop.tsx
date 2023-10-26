import s from './header-top.module.scss'
import { FC } from 'react'
import SocialIcons from '@/components/ui/social-icons/SocialIcons'

const HeaderTop: FC = () => {
	return (
		<div className={s.header__top}>
			<div className={s.content}>
				<SocialIcons />
			</div>
		</div>
	)
}

export default HeaderTop
