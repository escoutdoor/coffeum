import s from './category.module.scss'
import { FC } from 'react'
import {
	IProductItem,
	EnumProductType,
} from '@/shared/interfaces/product.interface'
import { IProductFilter } from '@/shared/interfaces/filter-data.interface'
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

interface ICategory {
	products: IProductItem[]
	length: number
	params: IProductFilter
	isLoading: boolean
	sidebarData: ISidebarData
	EnumProductType: EnumProductType
}

const Category: FC<ICategory> = ({
	products,
	length,
	params,
	isLoading,
	sidebarData,
	EnumProductType,
}) => {
	const meta =
		categoryMeta[camelize(EnumProductType) as keyof typeof categoryMeta]

	return (
		<Layout title={meta?.title} description={meta?.description}>
			<PageHeader title={meta?.title} />
			<div className={s.content}>
				{sidebarData && <Sidebar data={sidebarData} />}
				<main>
					<div className={s.categories}>
						{EnumProductType in productCategories && (
							<ProductCategories
								categories={
									productCategories[
										EnumProductType as keyof typeof productCategories
									]
								}
								activeCategory={params.category || ''}
							/>
						)}
					</div>
					<SortingBar />
					<ProductList products={products} isLoading={isLoading} />
					<Pagination length={length} />
					{EnumProductType === 'coffee' &&
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
