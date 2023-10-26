import s from './layout.module.scss'
import { FC, PropsWithChildren } from 'react'
import Meta from '../seo/Meta'
import IMeta from '@/shared/interfaces/meta.inteface'
import Header from './header/Header'
import Footer from './footer/Footer'
import Navbar from './navbar/Navbar'

const Layout: FC<PropsWithChildren<IMeta>> = ({
	title,
	description,
	children,
}) => {
	return (
		<Meta title={title} description={description}>
			<Header />
			<Navbar />
			<div className="wrapper">
				<main>{children}</main>
			</div>
			<Footer />
		</Meta>
	)
}

export default Layout
