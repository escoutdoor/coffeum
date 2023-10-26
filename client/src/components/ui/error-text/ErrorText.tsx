import s from './error-text.module.scss'
import { AiOutlineWarning } from 'react-icons/ai'
import { FC } from 'react'

const ErrorText: FC<
	React.HTMLAttributes<HTMLDivElement> & { children: string | undefined }
> = ({ children, ...rest }) => {
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
