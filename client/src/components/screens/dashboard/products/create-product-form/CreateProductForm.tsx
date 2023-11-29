import s from './create-product-form.module.scss'
import { useCreateProduct } from '@/hooks/useCreateProduct'
import { TProductSchema, productSchema } from '@/lib/schemas/product.schema'
import { ProductType } from '@/shared/interfaces/product.interface'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm, SubmitHandler } from 'react-hook-form'
import Field from '@/components/ui/field/Field'
import ProductTypeSelect from '../product-type-select/ProductTypeSelect'
import FormButton from '@/components/ui/form-button/FormButton'
import TextArea from '@/components/ui/text-area/TextArea'
import { getArrayFromString } from '@/utils/string-to-array'

const CreateProductForm = () => {
	const { createProduct } = useCreateProduct()

	const {
		register,
		handleSubmit,
		formState: { errors, isValid },
		control,
	} = useForm<TProductSchema>({
		mode: 'onChange',
		resolver: zodResolver(productSchema),
	})

	const onSubmit: SubmitHandler<TProductSchema> = data => {
		createProduct({
			...data,
			image: '',
			type: data.type as ProductType,
			categories: getArrayFromString(data.categories) as string[],
			composition: getArrayFromString(data.composition),
		})
	}

	return (
		<div className={s.block}>
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

export default CreateProductForm
