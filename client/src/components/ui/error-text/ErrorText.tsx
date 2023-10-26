<<<<<<< HEAD
import s from './error-text.module.scss'
import { AiOutlineWarning } from 'react-icons/ai'
import { FC } from 'react'

const ErrorText: FC<
	React.HTMLAttributes<HTMLDivElement> & { children: string | undefined }
> = ({ children, ...rest }) => {
=======
import { AiOutlineWarning } from 'react-icons/ai'
import s from './error-text.module.scss'
import { TextProps } from '@/shared/interfaces/text.interface'

const ErrorText = ({
	children,
	...rest
}: {
	children?: string
	rest: TextProps
}) => {
>>>>>>> 5159a9b674539dc2e2001b7e508ac086cc645379
	return (
		<>
			{children && (
				<div className={s.error} {...rest}>
					<span className={s.text}>{children}</span>
					<AiOutlineWarning />
				</div>
			)}
		</>
	)
}

export default ErrorText
