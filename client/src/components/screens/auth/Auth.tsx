import s from './auth.module.scss'
import Layout from '@/components/layout/Layout'
import PageHeader from '@/components/ui/page-header/PageHeader'
import { NextPage } from 'next'
import RegisterForm from './register-form/RegisterForm'
import LoginForm from './login-form/LoginForm'

const Auth: NextPage = () => {
	return (
		<Layout title="Вхід до системи">
			<PageHeader title="Вхід до системи" />
			<div className={s.forms}>
				<LoginForm />
				<RegisterForm />
			</div>
		</Layout>
	)
}

export default Auth
