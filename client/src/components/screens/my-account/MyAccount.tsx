import s from './my-account.module.scss'
import Layout from '@/components/layout/Layout'
import PageHeader from '@/components/ui/page-header/PageHeader'
import { FC } from 'react'
import AccountSections from './account-sections/AccountSections'
import AccountSidebar from './account-sidebar/AccountSidebar'

const MyAccount: FC = () => {
	return (
		<Layout title="Мій аккаунт">
			<PageHeader title="Мій аккаунт" />
			<div className={s.account}>
				<AccountSidebar />
				<AccountSections />
			</div>
		</Layout>
	)
}

export default MyAccount
