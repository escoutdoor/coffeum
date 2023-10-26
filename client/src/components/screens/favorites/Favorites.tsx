import s from './favorites.module.scss'
import { NextPage } from 'next'
import Layout from '@/components/layout/Layout'
import PageHeader from '@/components/ui/page-header/PageHeader'
import FavoriteList from './favorite-list/FavoriteList'
import Table from '@/components/ui/table/Table'

const Favorites: NextPage = () => {
	return (
		<Layout
			title="Закладки"
			description="Власний каталог товарів. Вибирайте товари для покупок і зберігайте їх для зручності."
		>
			<PageHeader title="Закладки" />
			<main>
				<Table items={['Товар', 'Ціна', 'Дата', 'Дії']}>
					<FavoriteList />
				</Table>
			</main>
		</Layout>
	)
}

export default Favorites
