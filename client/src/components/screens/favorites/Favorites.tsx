import s from './favorites.module.scss'
import { NextPage } from 'next'
import Layout from '@/components/layout/Layout'
import PageHeader from '@/components/ui/page-header/PageHeader'
import FavoriteList from './favorite-list/FavoriteList'
import Table from '@/components/ui/table/Table'
import { useFavorites } from '@/hooks/useFavorites'
import NoList from '@/components/ui/no-list/NoList'

const Favorites: NextPage = () => {
	const { favorites } = useFavorites()

	return (
		<Layout
			title="Закладки"
			description="Власний каталог товарів. Вибирайте товари для покупок і зберігайте їх для зручності."
		>
			<PageHeader title="Закладки" />
			<main>
				{favorites.length ? (
					<Table items={['Товар', 'Ціна', 'Дата', 'Дії']}>
						<FavoriteList favorites={favorites} />
					</Table>
				) : (
					<NoList message="Немає закладок" />
				)}
			</main>
		</Layout>
	)
}

export default Favorites
