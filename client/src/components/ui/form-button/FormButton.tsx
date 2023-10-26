import { ButtonProps } from '@/shared/interfaces/button.interface'
import s from './form-button.module.scss'
import { FC, PropsWithChildren } from 'react'

const FormButton: FC<PropsWithChildren<ButtonProps>> = ({
	children: title,
	...rest
}) => {
	return (
		<button className={s.button} {...rest}>
			{title}
		</button>
	)
}

export default FormButton
