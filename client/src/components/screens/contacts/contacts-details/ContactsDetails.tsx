import s from './contacts-details.module.scss'
import { FC } from 'react'
import ContactsDetailsItem from './contacts-details-item/ContactsDetailsItem'
import { contactsDetails } from '@/helpers/contacts-details'

const ContactsDetails: FC = () => {
	return (
		<div className={s.contacts}>
			{contactsDetails.map(item => (
				<ContactsDetailsItem
					id={item.id}
					Icon={item.Icon}
					title={item.title}
					links={item.links}
					text={item.text}
				/>
			))}
		</div>
	)
}

export default ContactsDetails
