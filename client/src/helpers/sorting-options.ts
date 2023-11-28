import { EnumSort } from '@/interfaces/sort.interface'

interface sortingOption {
	readonly value: EnumSort
	readonly label: string
}

export const sortingOptions: readonly sortingOption[] = [
	{ value: EnumSort.POPULARITY, label: 'Сортувати за популярністю' },
	{
		value: EnumSort.ASC_PRICE,
		label: 'Сортувати за ціною: від нижчої до вищої',
	},
	{
		value: EnumSort.DESC_PRICE,
		label: 'Сортувати за ціною: від вищої до нижчої',
	},
]

interface limitOption {
	readonly value: number
	readonly label: number
}

export const limitOptions: readonly limitOption[] = [
	{ value: 12, label: 12 },
	{ value: 24, label: 24 },
	{ value: 36, label: 36 },
]
