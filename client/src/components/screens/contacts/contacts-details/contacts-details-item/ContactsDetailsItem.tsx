import { IContactsDetailsItem } from '@/interfaces/contacts-details.interface'
import s from './contacts-details-item.module.scss'
import { FC } from 'react'
import Link from 'next/link'
import Text from '@/components/ui/heading/text/Text'
import SectionTitle from '@/components/ui/heading/section-title/SectionTitle'

const ContactsDetailsItem: FC<{ item: IContactsDetailsItem }> = ({ item }) => {
	return (
		<div className={s.box}>
			<item.Icon />
			<div className={s.details}>
				<SectionTitle
					style={{
						marginBottom: '15px',
					}}
				>
					{item.title}
				</SectionTitle>
				<ul className={s.list}>
					{item.links &&
						item.links.map((link, index) => (
							<li key={index}>
								<Link href={link.href} className={s.link}>
									{link.title}
								</Link>
							</li>
						))}
					{item.text &&
						item.text.map((text, index) => (
							<Text key={index}>{text}</Text>
						))}
				</ul>
			</div>
		</div>
	)
}

export default ContactsDetailsItem
