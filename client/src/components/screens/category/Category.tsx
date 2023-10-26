import s from './category.module.scss'
import { FC } from 'react'
import {
	IProductItem,
	ProductType,
} from '@/shared/interfaces/product.interface'
import { IProductDetailsFilterData } from '@/shared/interfaces/filter-data.interface'
import { ISidebarData } from '@/shared/interfaces/sidebar.interface'
import { productCategories } from '@/helpers/product-categories'
import { coffeeInfo } from '@/helpers/coffee'
import { categoryMeta } from '@/helpers/category-details'
import { camelize } from '@/utils/camelize'
import Layout from '@/components/layout/Layout'
import PageHeader from '@/components/ui/page-header/PageHeader'
import Sidebar from '@/components/ui/sidebar/Sidebar'
import SortingBar from '@/components/ui/sorting-bar/SortingBar'
import ProductList from '@/components/ui/product-list/ProductList'
import Pagination from '@/components/ui/pagination/Pagination'
import Section from '@/components/ui/section/Section'
import ProductCategories from './product-categories/ProductCategories'

const Category: FC<{
	products: IProductItem[]
	length: number
	params: IProductDetailsFilterData
	isLoading: boolean
	sidebarData: ISidebarData
	productType: ProductType
}> = ({ products, length, params, isLoading, sidebarData, productType }) => {
	const meta =
		categoryMeta[camelize(productType) as keyof typeof categoryMeta]

	return (
		<Layout title={meta?.title} description={meta?.description}>
			<PageHeader title={meta?.title} />
			<div className={s.content}>
				{sidebarData && <Sidebar data={sidebarData} />}
				<main>
					<div className={s.categories}>
						{productType in productCategories && (
							<ProductCategories
								categories={
									productCategories[
										productType as keyof typeof productCategories
									]
								}
								activeCategory={params.category || ''}
							/>
						)}
					</div>
					<SortingBar />
					<ProductList products={products} />
					<Pagination length={length} />
					{productType === 'coffee' &&
						coffeeInfo.map(item => (
							<Section
								title={item.title}
								text={item.text}
								id={item.id}
								key={item.id}
							/>
						))}
				</main>
			</div>
		</Layout>
	)
}

export default Category
