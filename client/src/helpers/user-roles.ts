import { EnumRole } from '@/shared/interfaces/user.interface'

interface roleOption {
	readonly value: EnumRole
	readonly label: string
}

export const roleOptions: readonly roleOption[] = [
	{ value: EnumRole.ADMIN, label: 'Адміністратор' },
	{
		value: EnumRole.USER,
		label: 'Користувач',
	},
]
