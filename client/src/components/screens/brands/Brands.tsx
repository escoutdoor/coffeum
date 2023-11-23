import Layout from '@/components/layout/Layout'
import PageHeader from '@/components/ui/page-header/PageHeader'
import { NextPage } from 'next'
import { useState, useEffect } from 'react'
import BrandList from './brand-list/BrandList'
import SearchManufacturer from './search-manufacturer/SearchManufacturer'
import { useBrands } from '@/hooks/useBrands'
import Loading from '@/components/ui/loading/Loading'

const Brands: NextPage = () => {
	const { isLoading, data: brands } = useBrands()

	const [text, setText] = useState('')

	return (
		<Layout
			title="Виробники"
			description="Відкрийте Світ Кави разом із Нами - Дізнайтеся про найкращих виробників кави, які представлені на нашому сайті. Знайдіть свої улюблені бренди для ідеального кавового досвіду."
		>
			<PageHeader title="Виробники" />
			<SearchManufacturer text={text} setText={setText} />
			{isLoading ? (
				<Loading />
			) : (
				brands && (
					<BrandList
						brands={brands.filter((item: string) =>
							item?.toLowerCase().includes(text.toLowerCase())
						)}
					/>
				)
			)}
		</Layout>
	)
}

export default Brands
