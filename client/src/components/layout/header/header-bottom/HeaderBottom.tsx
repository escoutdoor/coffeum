import Link from 'next/link'
import s from './header-bottom.module.scss'
import { FC } from 'react'
import Image from 'next/image'
import Search from './search/Search'
import PhoneNumbers from './phone-numbers/PhoneNumbers'
import Actions from './actions/Actions'

const HeaderBottom: FC = () => {
	const PF = process.env.NEXT_PUBLIC_IMAGES

	return (
		<div className={s.header__bottom}>
			<Link className={s.logo} href={'/'}>
				<Image
					src={`${PF}logos/logo.svg`}
					width={150}
					height={72}
					alt={'logo'}
				/>
			</Link>
			<div className={s.right}>
				<Search />
				<PhoneNumbers />
				<Actions />
			</div>
		</div>
	)
}

export default HeaderBottom
