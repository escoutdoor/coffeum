import { useRouter } from 'next/router'
import s from './brown-link.module.scss'
import { FC, PropsWithChildren } from 'react'

interface IBrownLink {
	href?: string
	onClick?: () => void
}

const BrownLink: FC<PropsWithChildren<IBrownLink>> = ({
	href,
	onClick,
	children,
}) => {
	const { push } = useRouter()

	const handleClick = () => {
		if (!href && !onClick) return

		if (onClick) {
			onClick()
		}

		if (href) {
			push(href)
		}
	}

	return (
		<span onClick={handleClick} className={s.link}>
			{children}
		</span>
	)
}

export default BrownLink
