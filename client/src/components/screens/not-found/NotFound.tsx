import s from './not-found.module.scss'
import Layout from '@/components/layout/Layout'
import PageHeader from '@/components/ui/page-header/PageHeader'
import { NextPage } from 'next'
import Image from 'next/image'
import MiddleTitle from '@/components/ui/heading/middle-title/MiddleTitle'

const NotFound: NextPage = () => {
	return (
		<Layout title="404">
			<PageHeader title="Сторінка не знайдена" />
			<div className={s.not__found}>
				<div className={s.container}>
					<Image
						src={'/images/img/404.png'}
						width={500}
						height={500}
						alt="page not found image"
					/>
					<MiddleTitle>На жаль, такої сторінки не існує</MiddleTitle>
				</div>
			</div>
		</Layout>
	)
}

export default NotFound
