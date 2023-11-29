import s from './dashboard-products.module.scss'
import { IProduct } from '@/shared/interfaces/product.interface'
import { useQueryParams } from '@/hooks/useQueryParams'
import { useGetFilterParams } from '@/hooks/useGetFilterParams'
import DashboardLayout from '../layout/DashboardLayout'
import DashboardProductList from './dashboard-product-list/DashboardProductList'
import SectionTitle from '@/components/ui/heading/section-title/SectionTitle'
import CreateProductForm from './create-product-form/CreateProductForm'
import SearchInput from '@/components/ui/search-input/SearchInput'

const DashboardProducts = ({ products }: { products: IProduct[] }) => {
	const updateQueryParam = useQueryParams()
	const { query } = useGetFilterParams()

	return (
		<DashboardLayout title="Products">
			<div className={s.products}>
				<SectionTitle
					style={{
						textAlign: 'center',
						margin: '3rem 0',
					}}
				>
					Створення продукту
				</SectionTitle>

				<CreateProductForm />

				<SectionTitle
					style={{
						textAlign: 'center',
						margin: '3rem 0',
					}}
				>
					Продукти & Зміна даних продуктів
				</SectionTitle>

				<SearchInput
					placeholder="Пошук продукту"
					value={query}
					onChange={e =>
						updateQueryParam({
							name: 'q',
							value: e.target.value,
						})
					}
					style={{
						marginBottom: '3rem',
					}}
				/>

				<DashboardProductList products={products || []} />
			</div>
		</DashboardLayout>
	)
}

export default DashboardProducts
