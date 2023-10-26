import ErrorText from '../error-text/ErrorText'
import s from './filed.module.scss'
import { InputHTMLAttributes, forwardRef } from 'react'

interface IField
	extends Omit<InputHTMLAttributes<HTMLInputElement>, 'className'> {
	label: string
	error?: string
	required?: boolean
}

const Field = forwardRef<HTMLInputElement, IField>(function Comp(
	{ label, error, required, ...rest },
	ref
) {
	return (
		<div className={s.field}>
			<label>
				<h1 className={s.title}>{label}</h1>
				{required && <span className={s.required}>*</span>}
			</label>
			<input className={s.input} {...rest} ref={ref} />
			<ErrorText>{error}</ErrorText>
		</div>
	)
})

export default Field
