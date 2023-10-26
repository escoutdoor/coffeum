import { TextProps } from '@/shared/interfaces/text.interface'
import s from './middle-title.module.scss'
import { FC, PropsWithChildren } from 'react'

const MiddleTitle: FC<PropsWithChildren<TextProps>> = ({
	children,
	...rest
}) => {
	return (
		<h1 className={s.title} {...rest}>
			{children}
		</h1>
	)
}

export default MiddleTitle
