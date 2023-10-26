import s from './account-section-heading.module.scss'
import { FC } from 'react'
import { IconType } from 'react-icons'

interface IAccountSectionHeading {
	title: string
	Icon: IconType
}

const AccountSectionHeading: FC<IAccountSectionHeading> = ({ title, Icon }) => {
	return (
		<div className={s.heading}>
			<Icon />
			<h1>{title}</h1>
		</div>
	)
}

export default AccountSectionHeading
