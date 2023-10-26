import s from './account-sections.module.scss'
import { FC } from 'react'
import ControlPanel from './control-panel/ControlPanel'
import { useSearchParams } from 'next/navigation'
import Orders from './orders/Orders'
import EditAccount from './edit-account/EditAccount'
import Address from './address/Address'

const AccountSections: FC = () => {
	const { get } = useSearchParams()

	const activeSection = get('section') || 'control-panel'

	return (
		<section className={s.section}>
			{activeSection === 'control-panel' && <ControlPanel />}
			{activeSection === 'orders' && <Orders />}
			{activeSection === 'edit-account' && <EditAccount />}
			{activeSection === 'address' && <Address />}
		</section>
	)
}

export default AccountSections
