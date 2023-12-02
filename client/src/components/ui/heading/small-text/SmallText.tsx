import { TextProps } from '@/shared/interfaces/text.interface'
import { FC, PropsWithChildren } from 'react'
import s from './small-text.module.scss'

const SmallText: FC<PropsWithChildren<TextProps>> = ({ children, ...rest }) => {
	return <p className={s.small__text}>{children}</p>
}

export default SmallText
