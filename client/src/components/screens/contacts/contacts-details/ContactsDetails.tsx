import s from './contacts-details.module.scss'
import { FC } from 'react'
import ContactsDetailsItem from './contacts-details-item/ContactsDetailsItem'
import { contactsDetails } from '@/helpers/contacts-details'

const ContactsDetails: FC = () => {
	return (
		<div className={s.contacts}>
			{contactsDetails.map(item => (
				<ContactsDetailsItem key={item.id} item={item} />
			))}
		</div>
	)
}

export default ContactsDetails
