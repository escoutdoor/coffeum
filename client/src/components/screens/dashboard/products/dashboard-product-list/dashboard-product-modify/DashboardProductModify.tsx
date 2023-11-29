import s from './dashboard-product-modify.module.scss'
import { TProductSchema, productSchema } from '@/lib/schemas/product.schema'
import { getArrayFromString } from '@/utils/string-to-array'
import { IProduct, ProductType } from '@/shared/interfaces/product.interface'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm, SubmitHandler, Controller } from 'react-hook-form'
import { useUpdateProduct } from '@/hooks/useUpdateProduct'
import Field from '@/components/ui/field/Field'
import FormButton from '@/components/ui/form-button/FormButton'
import TextArea from '@/components/ui/text-area/TextArea'
import ProductTypeSelect from '../../product-type-select/ProductTypeSelect'
import { getString } from '@/utils/array-to-string'

const DashboardProductModify = ({ product }: { product: IProduct }) => {
	const { updateProduct } = useUpdateProduct()

	const {
		register,
		formState: { errors, isValid },
		handleSubmit,
		control,
	} = useForm<TProductSchema>({
		mode: 'onChange',
		resolver: zodResolver(productSchema),
		values: {
			...product,
			categories: getString(product.categories) as string,
			composition: getString(product.composition),
		},
	})

	const onSubmit: SubmitHandler<TProductSchema> = data => {
		console.log(data.composition)

		updateProduct({
			data: {
				...data,
				type: data.type as ProductType,
				categories: getArrayFromString(data.categories) as string[],
				composition: getArrayFromString(data.composition),
			},
			id: product.id,
		})
	}

	return (
		<div className={s.item}>
			<form onSubmit={handleSubmit(onSubmit)}>
				<Field
					{...register('name')}
					label="Назва"
					placeholder="Назва продукту"
					error={errors.name?.message}
					required
				/>
				<TextArea
					{...register('description')}
					label="Опис"
					placeholder="Опис до продукту"
					error={errors.description?.message}
					required
				/>
				<ProductTypeSelect
					control={control}
					error={errors.type?.message}
				/>
				<Field
					{...register('originalPrice')}
					type="number"
					label="Ціна"
					placeholder="Ціна"
					error={errors.originalPrice?.message}
					required
				/>
				<Field
					{...register('discountedPrice')}
					type="number"
					label="Ціна зі знижкою"
					placeholder="Ціна зі знижкою"
					error={errors.discountedPrice?.message}
					required
				/>
				<Field
					{...register('country')}
					label="Країна виробника"
					placeholder="Країна виробника"
					error={errors.country?.message}
					required
				/>
				<Field
					{...register('packing')}
					label="Тип пакування"
					placeholder="Тип пакування"
					error={errors.packing?.message}
				/>
				<Field
					{...register('brand')}
					label="Назва бренду"
					placeholder="Назва бренду"
					error={errors.brand?.message}
					required
				/>
				<Field
					{...register('quantity')}
					label="Кількість товару"
					type="number"
					placeholder="Кількість товару"
					error={errors.quantity?.message}
					required
				/>
				<Field
					{...register('categories')}
					label="Категорії товару (через кому)"
					placeholder="Категорії товару"
					error={errors.categories?.message}
					required
				/>
				<Field
					{...register('composition')}
					label="Склад товару (через кому)"
					placeholder="Склад товару"
					error={errors.composition?.message}
				/>

				<FormButton disabled={!isValid}>Зберегти</FormButton>
			</form>
		</div>
	)
}

export default DashboardProductModify
