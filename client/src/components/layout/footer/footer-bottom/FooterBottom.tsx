import s from './footer-bottom.module.scss'
import { FC } from 'react'

const FooterBottom: FC = () => {
	return (
		<div className={s.footer__bottom}>
			<p>«Coffeum» &copy; by escoutdoor</p>
		</div>
	)
}

export default FooterBottom
