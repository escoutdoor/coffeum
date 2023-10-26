import { TextProps } from '@/shared/interfaces/text.interface'
import s from './text.module.scss'
import { FC, PropsWithChildren } from 'react'

const Text: FC<PropsWithChildren<TextProps>> = ({ children, ...rest }) => {
	return (
		<p className={s.text} {...rest}>
			{children}
		</p>
	)
}

export default Text
