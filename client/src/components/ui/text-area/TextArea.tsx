import ErrorText from '../error-text/ErrorText'
import s from './text-area.module.scss'
import { FC, TextareaHTMLAttributes, forwardRef, LegacyRef } from 'react'

interface ITextArea extends TextareaHTMLAttributes<HTMLTextAreaElement> {
	label: string
	error?: string
	required?: boolean
}

const TextArea: FC<ITextArea> = forwardRef<HTMLTextAreaElement, ITextArea>(
	({ label, error, required, ...rest }, ref) => {
		return (
			<div className={s.field}>
				<label>
					<h1 className={s.title}>{label}</h1>
					{required && <span className={s.required}>*</span>}
				</label>
				<textarea className={s.textarea} {...rest} ref={ref}></textarea>
				<ErrorText>{error}</ErrorText>
			</div>
		)
	}
)

export default TextArea
