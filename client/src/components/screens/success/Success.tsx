import s from './success.module.scss'
import { NextPage } from 'next'
import Layout from '@/components/layout/Layout'
import PageHeader from '@/components/ui/page-header/PageHeader'
import Image from 'next/image'
import MiddleTitle from '@/components/ui/heading/middle-title/MiddleTitle'
import DarkButton from '@/components/ui/dark-button/DarkButton'
import { useRouter } from 'next/navigation'

const Success: NextPage = () => {
	const { push } = useRouter()

	return (
		<Layout title="Успіх">
			<PageHeader title="Успіх" />
			<div className={s.content}>
				<Image
					src={`/images/img/success.png`}
					width={0}
					height={0}
					sizes="100vw"
					alt="success.png"
					className={s.image}
				/>

				<DarkButton onClick={() => push('/search-products')}>
					Повернутись до покупок
				</DarkButton>

				<MiddleTitle>Дякуємо, що купуєте товари у нас</MiddleTitle>
			</div>
		</Layout>
	)
}

export default Success
