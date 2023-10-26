import Layout from '@/components/layout/Layout'
import PageHeader from '@/components/ui/page-header/PageHeader'
import { NextPage } from 'next'
import s from './contacts.module.scss'
import ContactsDetails from './contacts-details/ContactsDetails'
import Section from '@/components/ui/section/Section'
import Map from './map/Map'

const Contacts: NextPage = () => {
	return (
		<Layout title="Контакти" description="">
			<PageHeader title="Контакти" />
			<div className={s.contacts}>
				<ContactsDetails />
				<Section
					id={1}
					title="Адреса"
					text={[
						'04070, Київ, вул. Волоська, 55/57',
						'10 хвилин пішки від ст. метро «Контрактова площа»',
						'7 хвилин пішки від ст. метро «Тараса Шевченка»',
					]}
				/>
				<Map />
			</div>
		</Layout>
	)
}

export default Contacts
