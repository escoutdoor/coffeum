import { IProductCategory } from '@/interfaces/product-category.interface'

const coffeeCategories: IProductCategory[] = [
	{
		name: 'Кава в зернах',
		image: 'beans.jpg',
		quantity: 312,
	},
	{
		name: 'Кава у капсулах',
		image: 'capsules.webp',
		quantity: 550,
	},
	{
		name: 'Кава у монодозах',
		image: 'ground-coffee.webp',
		quantity: 8,
	},
	{
		name: 'Мелена кава',
		image: 'mono.webp',
		quantity: 107,
	},
	{
		name: 'Розчинна кава',
		image: 'instant-coffee.webp',
		quantity: 18,
	},
]

const teaCategories: IProductCategory[] = [
	{
		name: 'Білий чай',
		image: 'white-tea.jpg',
		quantity: 3,
	},
	{
		name: 'Зелений чай',
		image: 'green-tea.webp',
		quantity: 77,
	},
	{
		name: 'Фруктовий чай',
		image: 'fruit-tea.jpg',
		quantity: 7,
	},
	{
		name: 'Чай Оолонг',
		image: 'oolong-tea.jpg',
		quantity: 4,
	},
	{
		name: 'Чай Пуер',
		image: 'puerht-tea.jpg',
		quantity: 1,
	},
	{
		name: "Чай трав'яний",
		image: 'herbal-tea.jpg',
		quantity: 14,
	},
	{
		name: 'Чорний чай',
		image: 'black-tea.jpg',
		quantity: 134,
	},
]

const accessoriesCategories: IProductCategory[] = [
	{
		name: 'Ємності для зберігання кави',
		image: 'coffee-boxes.jpg',
		quantity: 15,
	},
	{
		name: 'Заварники та кавники',
		image: 'melitta-kavnik.jpg',
		quantity: 5,
	},
	{
		name: 'Затискачі для упаковки',
		image: 'zazhim-tescoma.jpg',
		quantity: 1,
	},
	{
		name: 'Ложечки',
		image: 'citiz-espresso-spoon.jpg',
		quantity: 4,
	},
	{
		name: 'Молочники',
		image: 'pitcher.jpg',
		quantity: 4,
	},
	{
		name: 'Одноразовий посуд',
		image: 'lavazza-paper-cup.jpg',
		quantity: 11,
	},
	{
		name: 'Розмішувачі',
		image: 'meshalki-derev.jpg',
		quantity: 3,
	},
	{
		name: 'Тамблери, термоси, термокухлі',
		image: 'citiz-travel-mug.png',
		quantity: 22,
	},
	{
		name: 'Фільтри для води',
		image: 'saeco-brita-intenza.jpg',
		quantity: 22,
	},
	{
		name: 'Фільтри для кави',
		image: 'melitta-original-felter.jpg',
		quantity: 2,
	},
	{
		name: 'Цукор',
		image: 'sucre-roux.jpg',
		quantity: 5,
	},
	{
		name: 'Чашки та склянки',
		image: 'cups.jpg',
		quantity: 103,
	},
	{
		name: 'Чистящі засоби',
		image: 'philips_saeco_decalcifier.jpg',
		quantity: 41,
	},
]

export const productCategories = {
	coffee: coffeeCategories,
	tea: teaCategories,
	accessories: accessoriesCategories,
}
