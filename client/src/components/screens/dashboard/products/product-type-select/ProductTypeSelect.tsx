import { FC } from 'react'
import Select from 'react-select'
import { Controller, Control } from 'react-hook-form'
import { EnumProductTypes } from '@/helpers/product-types'
import { TProductSchema } from '@/lib/schemas/product.schema'
import s from './product-type-select.module.scss'
import ErrorText from '@/components/ui/error-text/ErrorText'

const ProductTypeSelect: FC<{
	control: Control<TProductSchema>
	error?: string
}> = ({ control, error }) => {
	return (
		<div className={s.form__select}>
			<label>
				<h1 className={s.title}>Тип продукту</h1>
				<span className={s.required}>*</span>
			</label>
			<Controller
				name="type"
				control={control}
				render={({ field }) => (
					<>
						<Select
							{...field}
							className={s.select}
							value={EnumProductTypes.find(
								p => p.value === field.value
							)}
							onChange={e => field.onChange(e?.value)}
							options={EnumProductTypes}
							placeholder="Тип продукту"
							theme={theme => ({
								...theme,
								borderRadius: 0,
								colors: {
									...theme.colors,
									primary25: '#ccc',
									primary: '#777',
								},
							})}
							styles={{
								control: (base, state) => ({
									...base,
									backgroundColor: 'transparent',
								}),
							}}
						/>
					</>
				)}
			/>
			<ErrorText>{error}</ErrorText>
		</div>
	)
}

export default ProductTypeSelect
