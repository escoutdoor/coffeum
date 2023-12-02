import s from './product-link-title.module.scss'
import Link, { LinkProps } from 'next/link'
import { FC, PropsWithChildren } from 'react'

interface IProductLinkTitle extends LinkProps {}

const ProductLinkTitle: FC<PropsWithChildren<IProductLinkTitle>> = ({
	children,
	...rest
}) => {
	return (
		<Link {...rest} className={s.link}>
			{children}
		</Link>
	)
}

export default ProductLinkTitle
