import { EnumProductType } from '@/shared/interfaces/product.interface'

export interface IEnumProductTypeOption {
	readonly value: EnumProductType
	readonly label: string
}

export const EnumProductTypes: readonly IEnumProductTypeOption[] = [
	{ value: EnumProductType.COFFEE, label: 'Кава' },
	{ value: EnumProductType.TEA, label: 'Чай' },
	{ value: EnumProductType.COFFEE_MACHINES, label: 'Кавове обладнання' },
	{ value: EnumProductType.MARKDOWN, label: 'Уцінка' },
	{ value: EnumProductType.COCOA_CHOCOLATE, label: 'Какао & Шоколад' },
	{ value: EnumProductType.ACCESSORIES, label: 'Аксесуари та сервіс' },
]
