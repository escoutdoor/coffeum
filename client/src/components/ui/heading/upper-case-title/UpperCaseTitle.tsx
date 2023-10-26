import { TextProps } from '@/shared/interfaces/text.interface'
import s from './upper-case-title.module.scss'
import { FC, PropsWithChildren } from 'react'

const UpperCaseTitle: FC<PropsWithChildren<TextProps>> = ({
	children,
	...rest
}) => {
	return (
		<h1 className={s.title} {...rest}>
			{children}
		</h1>
	)
}

export default UpperCaseTitle
