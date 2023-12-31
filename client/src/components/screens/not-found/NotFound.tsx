import s from './not-found.module.scss'
import Layout from '@/components/layout/Layout'
import PageHeader from '@/components/ui/page-header/PageHeader'
import { NextPage } from 'next'
import Image from 'next/image'
import MiddleTitle from '@/components/ui/heading/middle-title/MiddleTitle'
import { useRouter } from 'next/navigation'
import DarkButton from '@/components/ui/dark-button/DarkButton'

const NotFound: NextPage = () => {
	const { push } = useRouter()

	return (
		<Layout title="Сторінку не знайдено">
			<PageHeader title="Сторінку не знайдено" />
			<div className={s.content}>
				<Image
					src={'/images/img/404.png'}
					width={0}
					height={0}
					sizes="100vw"
					alt="page not found image"
					className={s.image}
				/>

				<DarkButton onClick={() => push('/search-products')}>
					Повернутись до покупок
				</DarkButton>

				<MiddleTitle>На жаль, такої сторінки не існує</MiddleTitle>
			</div>
		</Layout>
	)
}

export default NotFound
