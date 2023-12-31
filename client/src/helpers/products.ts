import { IProductItem } from '@/shared/interfaces/product.interface'

const products: IProductItem[] = [
	{
		id: '1',
		name: 'Кава у капсулах Carraro Brasile Dolce Gusto, 16 шт.',
		categories: ['Кава', 'Кава у касулах'],
		image: 'no-image.jpg',
		discountedPrice: 189,
		originalPrice: 205,
		quantity: 10,
		brand: 'caffe-carraro',
	},
	{
		id: '2',
		name: 'Кава Melitta Bella Crema Bio (750 г), зерно',
		categories: ['Кава', 'Кава у зернах'],
		discountedPrice: 299,
		originalPrice: 449,
		image: '2.jpg',
		quantity: 10,
		brand: 'melitta',
	},
	{
		id: '3',
		name: 'Кавомашина Melitta Caffeo Barista TS Smart stainless steel F86/0-100',
		categories: ['Автоматичні кавомашини', 'Кавове обладнання'],
		discountedPrice: 123,
		originalPrice: 321,
		image: '3.png',
		quantity: 10,
		brand: 'melitta',
	},
	{
		id: '4',
		name: 'Кавомашина Delonghi PrimaDonna Soul ECAM 610.75 MB',
		categories: ['Автоматичні кавомашини', 'Кавове обладнання'],
		discountedPrice: 44099,
		originalPrice: 49990,
		image: '4.jpg',
		quantity: 10,
		brand: 'delonghi',
	},
	{
		id: '5',
		name: 'Шоколад Nespresso Infiniment Exquis 70% Dark, 200 г',
		categories: [
			'Бутік Неспрессо',
			'Какао, шоколад, солодощі',
			'Солодощі Неспрессо',
		],
		discountedPrice: 299,
		originalPrice: 399,
		image: '5.jpg',
		quantity: 0,
		brand: 'nespresso',
	},
	{
		id: '6',
		name: 'Кава мелена Carraro 1927, 250 г, м/б',
		categories: ['Кава', 'Кава у зернах', 'Мелена кава'],
		discountedPrice: 249,
		originalPrice: 299,
		image: '6.jpg',
		quantity: 3,
		brand: 'caffe-carraro',
	},
	{
		id: '7',
		name: 'Кава Lavazza Tierra Brasile 100% Arabica Espresso (1 кг), зерно',
		categories: ['Кава', 'Кава у зернах'],
		discountedPrice: 659,
		originalPrice: 749,
		image: '7.jpg',
		quantity: 10,
		brand: 'lavazza',
	},
	{
		id: '8',
		name: 'Кава мелена Kimbo Aroma Gold 100% Arabica 250 г, м/б',
		categories: ['Кава', 'Мелена кава'],
		discountedPrice: 209,
		originalPrice: 239,
		image: '8.jpg',
		quantity: 0,
		brand: 'kimbo',
	},
]

export { products }
