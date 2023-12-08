import s from './role-selector.module.scss'
import { FC } from 'react'
import { Controller, Control } from 'react-hook-form'
import { TAdminModifyUser } from '@/lib/schemas/admin-modify-user.schema'
import Select from 'react-select'
import ErrorText from '@/components/ui/error-text/ErrorText'
import { roleOptions } from '@/helpers/user-roles'

const RoleSelector: FC<{
	control: Control<TAdminModifyUser>
	error?: string
}> = ({ control, error }) => {
	return (
		<div className={s.form__select}>
			<label>
				<h1 className={s.title}>Роль</h1>
				<span className={s.required}>*</span>
			</label>
			<Controller
				name="role"
				control={control}
				render={({ field }) => (
					<>
						<Select
							{...field}
							noOptionsMessage={() => 'Таких ролей немає'}
							className={s.select}
							value={roleOptions.find(
								p => p.value === field.value
							)}
							onChange={e => field.onChange(e?.value)}
							options={roleOptions}
							placeholder="Роль"
							theme={theme => ({
								...theme,
								borderRadius: 0,
								colors: {
									...theme.colors,
									primary25: '#ccc',
									primary: '#777',
								},
							})}
						/>
					</>
				)}
			/>
			<ErrorText>{error}</ErrorText>
		</div>
	)
}

export default RoleSelector
