import { ProductType } from '@/shared/interfaces/product.interface'

export interface IProductTypeOption {
	readonly value: ProductType
	readonly label: string
}

export const productTypes: readonly IProductTypeOption[] = [
	{ value: ProductType.COFFEE, label: 'Кава' },
	{ value: ProductType.TEA, label: 'Чай' },
	{ value: ProductType.COFFEE_MACHINES, label: 'Кавове обладнання' },
	{ value: ProductType.MARKDOWN, label: 'Уцінка' },
	{ value: ProductType.COCOA_CHOCOLATE, label: 'Какао & Шоколад' },
	{ value: ProductType.ACCESSORIES, label: 'Аксесуари та сервіс' },
]
