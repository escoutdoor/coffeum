import { TProductSchema, productSchema } from '@/lib/schemas/product.schema'
import s from './dashboard-product-modify.module.scss'
import { IProduct } from '@/shared/interfaces/product.interface'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm, SubmitHandler } from 'react-hook-form'
import Field from '@/components/ui/field/Field'
import { useUpdateProduct } from '@/hooks/useUpdateProduct'
import FormButton from '@/components/ui/form-button/FormButton'
import TextArea from '@/components/ui/text-area/TextArea'

const DashboardProductModify = ({ product }: { product: IProduct }) => {
	const { updateProduct } = useUpdateProduct()

	const {
		register,
		formState: { errors, isValid },
		handleSubmit,
		getValues,
	} = useForm<TProductSchema>({
		mode: 'onChange',
		resolver: zodResolver(productSchema),
		values: {
			...product,
		},
	})

	const onSubmit: SubmitHandler<TProductSchema> = data => {
		updateProduct({
			...product,
			...data,
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
				<Field
					{...register('packing')}
					label="Тип пакування"
					placeholder="Тип пакування"
					error={errors.packing?.message}
				/>
				<Field
					{...register('originalPrice', {
						valueAsNumber: true,
					})}
					type="number"
					label="Ціна"
					placeholder="Ціна"
					error={errors.originalPrice?.message}
					required
				/>
				<Field
					{...register('discountedPrice', {
						valueAsNumber: true,
					})}
					type="number"
					label="Ціна зі знижкою"
					placeholder="Ціна зі знижкою"
					error={errors.discountedPrice?.message}
					required
				/>
				<Field
					{...register('brand')}
					label="Назва бренду"
					placeholder="Назва бренду"
					error={errors.brand?.message}
					required
				/>
				<Field
					{...register('quantity', {
						valueAsNumber: true,
					})}
					label="Кількість товару"
					type="number"
					placeholder="Кількість товару"
					error={errors.quantity?.message}
					required
				/>

				<FormButton disabled={!isValid}>Зберегти</FormButton>
			</form>
		</div>
	)
}

export default DashboardProductModify
