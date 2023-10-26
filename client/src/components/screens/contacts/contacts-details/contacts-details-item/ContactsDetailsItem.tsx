import { IContactsDetailsItem } from '@/interfaces/contacts-details.interface'
import s from './contacts-details-item.module.scss'
import { FC } from 'react'
import Link from 'next/link'
import Text from '@/components/ui/heading/text/Text'
import SectionTitle from '@/components/ui/heading/section-title/SectionTitle'

const ContactsDetailsItem: FC<IContactsDetailsItem> = ({
	title,
	Icon,
	links,
	text,
}) => {
	return (
		<div className={s.box}>
			<Icon />
			<div className={s.details}>
				<SectionTitle
					style={{
						marginBottom: '15px',
					}}
				>
					{title}
				</SectionTitle>
				<ul className={s.list}>
					{links &&
						links.map((link, index) => (
							<li key={index}>
								<Link href={link.href} className={s.link}>
									{link.title}
								</Link>
							</li>
						))}
					{text &&
						text.map((text, index) => (
							<Text key={index}>{text}</Text>
						))}
				</ul>
			</div>
		</div>
	)
}

export default ContactsDetailsItem
