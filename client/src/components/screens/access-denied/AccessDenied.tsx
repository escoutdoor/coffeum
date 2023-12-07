import s from './access-denied.module.scss'
import { NextPage } from 'next'
import Layout from '@/components/layout/Layout'
import Image from 'next/image'
import PageHeader from '@/components/ui/page-header/PageHeader'
import MiddleTitle from '@/components/ui/heading/middle-title/MiddleTitle'
import { useRouter } from 'next/navigation'
import DarkButton from '@/components/ui/dark-button/DarkButton'

const AccessDenied: NextPage = () => {
	const { push } = useRouter()

	return (
		<Layout title="Доступ заборонено">
			<PageHeader title="Доступ заборонено" />
			<div className={s.content}>
				<Image
					src={`/images/img/403.png`}
					width={0}
					height={0}
					sizes="100vw"
					alt="403.png"
					className={s.image}
				/>

				<DarkButton onClick={() => push('/search-products')}>
					Повернутись до покупок
				</DarkButton>

				<MiddleTitle>
					На жаль, Ви не маєте доступу до цієї сторінки
				</MiddleTitle>
			</div>
		</Layout>
	)
}

export default AccessDenied
