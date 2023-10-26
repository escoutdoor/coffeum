import s from './social-icons.module.scss'
import { FC } from 'react'
import Link from 'next/link'
import { FaFacebookF, FaYoutube, FaInstagram } from 'react-icons/fa'

const SocialIcons: FC<{ dark?: boolean }> = ({ dark }) => {
	return (
		<div className={dark ? `${s.icons} ${s.dark}` : s.icons}>
			<Link href={'https://github.com/escoutdoor'}>
				<FaFacebookF title="Facebook" />
			</Link>
			<Link href={'https://github.com/escoutdoor'}>
				<FaYoutube title="Youtube" />
			</Link>
			<Link href={'https://github.com/escoutdoor'}>
				<FaInstagram title="Instagram" />
			</Link>
		</div>
	)
}

export default SocialIcons
