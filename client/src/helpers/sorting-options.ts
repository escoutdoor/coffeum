interface sortingOption {
	readonly value: string
	readonly label: string
}

export const sortingOptions: readonly sortingOption[] = [
	{ value: 'popularity', label: 'Сортувати за популярністю' },
	{ value: 'rating', label: 'Сортувати за оцінкою' },
	{ value: 'asc-price', label: 'Сортувати за ціною: від нижчої до вищої' },
	{ value: 'desc-price', label: 'Сортувати за ціною: від вищої до нижчої' },
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
