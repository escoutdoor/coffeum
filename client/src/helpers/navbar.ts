import { IMenu } from '@/interfaces/menu.interface'

export interface INavItem {
	id: number
	title: string
	link: string
}

const navigation: INavItem[] = [
	{
		id: 1,
		title: 'Кава',
		link: '/coffee',
	},
	{
		id: 2,
		title: 'Виробники',
		link: '/brands',
	},
	{
		id: 3,
		title: 'Уцінка',
		link: '/markdown',
	},
	{
		id: 4,
		title: 'Акціїї',
		link: '/promotions',
	},
	{
		id: 5,
		title: 'Знижки',
		link: '/discounts',
	},
	{
		id: 6,
		title: 'Доставка та оплата',
		link: '/delivery',
	},
	{
		id: 7,
		title: 'Контакти',
		link: 'contacts',
	},
]

const headerMenu: IMenu[] = [
	{
		id: 2,
		title: 'Кава в зернах',
		link: '/coffee?category=Кава в зернах',
		subcategories: [
			{
				id: 1,
				title: 'Виробники',
				list: [
					{
						id: 1,
						title: 'Blasercafe',
						link: 'brands=Blasercafe',
					},
					{
						id: 2,
						title: 'Caffe Carraro',
						link: 'brands=Caffe Carraro',
					},
					{
						id: 3,
						title: 'Kimbo',
						link: 'brands=Kimbo',
					},

					{
						id: 4,
						title: 'Movenpick',
						link: 'brands=Movenpick',
					},
					{
						id: 5,
						title: 'illy',
						link: 'brands=illy',
					},
					{
						id: 6,
						title: 'Lavazza',
						link: 'brands=Lavazza',
					},
				],
			},
			{
				id: 2,
				title: 'Країна виробник',
				list: [
					{
						id: 1,
						title: 'Німеччина',
						link: 'countries=Німеччина',
					},
					{
						id: 2,
						title: 'Італія',
						link: 'countries=Італія',
					},
					{
						id: 3,
						title: 'Польша',
						link: 'countries=Польша',
					},

					{
						id: 4,
						title: 'Австрія',
						link: 'countries=Австрія',
					},
					{
						id: 5,
						title: 'Бельгія',
						link: 'countries=Бельгія',
					},
					{
						id: 6,
						title: 'Великобританія',
						link: 'countries=Великобританія',
					},
				],
			},
			{
				id: 3,
				title: 'Фасування',
				list: [
					{
						id: 1,
						title: '250 г',
						link: 'packing=250 г',
					},
					{
						id: 2,
						title: '500 г',
						link: 'packing=500 г',
					},
					{
						id: 3,
						title: '1 кг',
						link: 'packing=1 кг',
					},

					{
						id: 4,
						title: '3 кг',
						link: 'packing=3 кг',
					},
				],
			},
			{
				id: 4,
				title: 'Склад',
				list: [
					{
						id: 1,
						title: '100% Арабіка',
						link: 'composition=Арабіка 100% ',
					},
					{
						id: 2,
						title: '100% Робуста',
						link: 'composition=Робуста 100% ',
					},
					{
						id: 3,
						title: 'Арабіка та Робуста',
						link: 'composition=Арабіка 50%&composition=Робуста 50%',
					},
				],
			},
		],
	},
	{
		id: 3,
		title: 'Кава у капсулах',
		link: '/coffee?category=Кава у капсулах',
		subcategories: [
			{
				id: 1,
				title: 'Виробники',
				list: [
					{
						id: 1,
						title: 'Nespresso',
						link: 'brands=Nespresso',
					},
					{
						id: 2,
						title: 'Belmio',
						link: 'brands=Belmio',
					},
					{
						id: 3,
						title: 'L’or',
						link: 'brands=L’or',
					},
					{
						id: 4,
						title: 'Boseco',
						link: 'brands=Boseco',
					},
					{
						id: 5,
						title: 'Gimoka',
						link: 'brands=Gimoka',
					},
					{
						id: 6,
						title: 'Lavazza',
						link: 'brands=Lavazza',
					},
					{
						id: 7,
						title: 'Starbucks',
						link: 'brands=Starbucks',
					},
				],
			},
			{
				id: 2,
				title: 'Країна виробник',
				list: [
					{
						id: 1,
						title: 'Бельгія',
						link: 'countries=Бельгія',
					},
					{
						id: 2,
						title: 'Німеччина',
						link: 'countries=Німеччина',
					},
					{
						id: 3,
						title: 'Італія',
						link: 'countries=Італія',
					},
					{
						id: 4,
						title: 'США',
						link: 'countries=США',
					},
					{
						id: 5,
						title: 'Франція',
						link: 'countries=Франція',
					},
					{
						id: 6,
						title: 'Швейцарія',
						link: 'countries=Швейцарія',
					},
				],
			},
			{
				id: 3,
				title: 'Фасування',
				list: [
					{
						id: 1,
						title: '1 капсула',
						link: 'packing=1 капсула',
					},
					{
						id: 2,
						title: '10 капсул',
						link: 'packing=10 капсул',
					},
					{
						id: 3,
						title: '12 капсул',
						link: 'packing=12 капсул',
					},
				],
			},
			{
				id: 4,
				title: 'Склад',
				list: [
					{
						id: 1,
						title: 'Арабіка 100%',
						link: 'composition=Арабіка 100%',
					},
					{
						id: 2,
						title: 'Робуста 100%',
						link: 'composition=Робуста 100%',
					},
					{
						id: 3,
						title: 'Арабіка 90%, робуста 10%',
						link: 'composition=Арабіка 90%&composition=Робуста 10%',
					},
					{
						id: 4,
						title: 'Арабіка 70%, робуста 30%',
						link: 'composition=Арабіка 70%&composition=Робуста 30%',
					},
					{
						id: 5,
						title: 'Арабіка/робуста',
						link: 'composition=Арабіка 50%&composition=Робуста 50%',
					},
				],
			},
		],
	},
	{
		id: 4,
		title: 'Мелена кава',
		link: '/coffee?category=Мелена кава',
		subcategories: [
			{
				id: 1,
				title: 'Виробники',
				list: [
					{
						id: 1,
						title: 'Starbucks',
						link: 'brands=Starbucks',
					},
					{
						id: 2,
						title: 'Lavazza',
						link: 'brands=Lavazza',
					},
					{
						id: 3,
						title: 'Malongo',
						link: 'brands=Malongo',
					},
					{
						id: 4,
						title: 'Kimbo',
						link: 'brands=Kimbo',
					},
					{
						id: 5,
						title: 'Julius Meinl',
						link: 'brands=ulius Meinl',
					},
					{
						id: 6,
						title: 'Gimoka',
						link: 'brands=Gimoka',
					},
				],
			},
			{
				id: 2,
				title: 'Країна виробник',
				list: [
					{
						id: 1,
						title: 'Бельгія',
						link: 'countries=Бельгія',
					},
					{
						id: 2,
						title: 'Німеччина',
						link: 'countries=Німеччина',
					},
					{
						id: 3,
						title: 'Італія',
						link: 'countries=Італія',
					},
					{
						id: 4,
						title: 'США',
						link: 'countries=США',
					},
					{
						id: 5,
						title: 'Франція',
						link: 'countries=Франція',
					},
					{
						id: 6,
						title: 'Швейцарія',
						link: 'countries=Швейцарія',
					},
				],
			},
			{
				id: 3,
				title: 'Фасування',
				list: [
					{
						id: 1,
						title: '1 кг',
						link: 'packing=1 кг',
					},
					{
						id: 2,
						title: '200 г',
						link: 'packing=200 г',
					},
					{
						id: 3,
						title: '250 г',
						link: 'packing=250 г',
					},
				],
			},
			{
				id: 4,
				title: 'Склад',
				list: [
					{
						id: 1,
						title: 'Арабіка 100%',
						link: 'composition=Арабіка 100%',
					},
					{
						id: 2,
						title: 'Робуста 100%',
						link: 'composition=Робуста 100%',
					},
					{
						id: 3,
						title: 'Арабіка 90%, робуста 10%',
						link: 'composition=Арабіка 90%&composition=Робуста 10%',
					},
					{
						id: 4,
						title: 'Арабіка 70%, робуста 30%',
						link: 'composition=Арабіка 70%&composition=Робуста 30%',
					},
					{
						id: 5,
						title: 'Арабіка/робуста',
						link: 'composition=Арабіка 50%&composition=Робуста 50%',
					},
				],
			},
		],
	},
	{
		id: 5,
		title: 'Розчинна кава',
		link: '/coffee?category=Розчинна кава',
		subcategories: [
			{
				id: 1,
				title: 'Виробники',
				list: [
					{
						id: 1,
						title: 'Ambassador',
						link: 'brands=Ambassador',
					},
					{
						id: 2,
						title: 'Tchibo',
						link: 'brands=Tchibo',
					},
					{
						id: 3,
						title: 'Jacobs',
						link: 'brands=Jacobs',
					},
				],
			},
			{
				id: 2,
				title: 'Країна виробник',
				list: [
					{
						id: 1,
						title: 'Німеччина',
						link: 'countries=Німеччина',
					},
				],
			},
			{
				id: 3,
				title: 'Фасування',
				list: [
					{
						id: 1,
						title: '50 г',
						link: 'packing=50 г',
					},
					{
						id: 2,
						title: '100 г',
						link: 'packing=100 г',
					},
					{
						id: 3,
						title: '200 г',
						link: 'packing=200 г',
					},
					{
						id: 4,
						title: '500 г',
						link: 'packing=500 г',
					},
				],
			},
		],
	},
	{
		id: 6,
		title: 'Чай',
		link: '/tea',
		subcategories: [
			{
				id: 1,
				title: 'Виробники',
				list: [
					{
						id: 1,
						title: 'Dilmah',
						link: 'brands=Dilmah',
					},
					{
						id: 2,
						title: 'Dammann Freres',
						link: 'brands=Dammann Freres',
					},
					{
						id: 3,
						title: 'Greenfield',
						link: 'brands=Greenfield',
					},
					{
						id: 4,
						title: 'Maroya Tea',
						link: 'brands=Maroya Tea',
					},
					{
						id: 5,
						title: 'Hello Tea',
						link: 'brands=Hello Tea',
					},
					{
						id: 6,
						title: 'Mlesna',
						link: 'brands=Mlesna',
					},
					{
						id: 7,
						title: 'TOTTI',
						link: 'brands=TOTTI',
					},
					{
						id: 8,
						title: 'Yume',
						link: 'brands=Yume',
					},
				],
			},
			{
				id: 2,
				title: 'Вид',
				list: [
					{
						id: 1,
						title: 'Білий чай',
						link: 'category=Білий чай',
					},
					{
						id: 2,
						title: 'Зелений чай',
						link: 'category=Зелений чай',
					},
					{
						id: 3,
						title: 'Фруктовий чай',
						link: 'category=Фруктовий чай',
					},
					{
						id: 4,
						title: 'Чай оолонг',
						link: 'category=Чай оолонг',
					},
					{
						id: 5,
						title: 'Чай Пуер',
						link: 'category=Чай Пуер',
					},
					{
						id: 6,
						title: "Чай трав'яний",
						link: "category=Чай трав'яний",
					},
					{
						id: 7,
						title: 'Чорний чай',
						link: 'category=Чорний чай',
					},
				],
			},
			{
				id: 3,
				title: 'Фасування',
				list: [
					{
						id: 1,
						title: '25 пакетиків',
						link: 'packing=25 пакетиків',
					},
					{
						id: 2,
						title: '50 пакетиків',
						link: 'packing=50 пакетиків',
					},
					{
						id: 3,
						title: '100 г',
						link: 'packing=100 г',
					},
					{
						id: 4,
						title: '100 пакетиків',
						link: 'packing=100 пакетиків',
					},
					{
						id: 5,
						title: '200 г',
						link: 'packing=200 г',
					},
					{
						id: 6,
						title: '250 г',
						link: 'packing=250 г',
					},
				],
			},
		],
	},
	{
		id: 7,
		title: 'Кавове обладнання',
		link: '/coffee-machines',
		subcategories: [
			{
				id: 1,
				title: 'Виробники',
				list: [
					{
						id: 1,
						title: 'Bosch',
						link: 'brands=Bosch',
					},
					{
						id: 2,
						title: 'Delonghi',
						link: 'brands=Delonghi',
					},
					{
						id: 3,
						title: 'Philips',
						link: 'brands=Philips',
					},
					{
						id: 4,
						title: 'Jura',
						link: 'brands=Jura',
					},
					{
						id: 5,
						title: 'Krups',
						link: 'brands=Krups',
					},
					{
						id: 6,
						title: 'Melitta',
						link: 'brands=Melitta',
					},
					{
						id: 7,
						title: 'Saeco',
						link: 'brands=Saeco',
					},
				],
			},
			{
				id: 2,
				title: 'Вид',
				list: [
					{
						id: 1,
						title: 'Автоматичні кавомашини',
						link: 'category=Автоматичні кавомашини',
					},
					{
						id: 2,
						title: 'Капсульні кавоварки',
						link: 'category=Капсульні кавоварки',
					},
					{
						id: 3,
						title: 'Професійні кавомашини',
						link: 'category=Професійні кавомашини',
					},
					{
						id: 4,
						title: 'Рожкові кавоварки',
						link: 'category=Рожкові кавоварки',
					},
					{
						id: 5,
						title: 'Крапельні кавоварки',
						link: 'category=Крапельні кавоварки',
					},
					{
						id: 6,
						title: 'Гейзерні кавоварки',
						link: 'category=Гейзерні кавоварки',
					},
				],
			},
		],
	},
	{
		id: 8,
		title: 'Аксесуари та сервіс',
		link: '/accessories',
		subcategories: [
			{
				id: 1,
				title: 'Виробники',
				list: [
					{
						id: 1,
						title: 'Nespresso',
						link: 'brands=Nespresso',
					},
					{
						id: 2,
						title: 'Jura',
						link: 'brands=Jura',
					},
					{
						id: 3,
						title: 'Filter Logic',
						link: 'brands=Filter Logic',
					},
					{
						id: 4,
						title: 'Bosch',
						link: 'brands=Bosch',
					},
					{
						id: 5,
						title: 'Delonghi',
						link: 'brands=Delonghi',
					},
					{
						id: 6,
						title: 'Krups',
						link: 'brands=Krups',
					},
				],
			},
			{
				id: 2,
				title: 'Вид',
				list: [
					{
						id: 1,
						title: 'Чистящі засоби',
						link: 'category=Чистящі засоби',
					},
					{
						id: 2,
						title: 'Фільтри для води',
						link: 'category=Фільтри для води',
					},
					{
						id: 3,
						title: 'Фільтри для кави',
						link: 'category=Фільтри для кави',
					},
					{
						id: 4,
						title: 'Цукор',
						link: 'category=Цукор',
					},
					{
						id: 5,
						title: 'Ємності для зберігання кави',
						link: 'category=Ємності для зберігання кави',
					},
					{
						id: 6,
						title: 'Розмішувачі',
						link: 'category=Розмішувачі',
					},
					{
						id: 7,
						title: 'Одноразовий посуд',
						link: 'category=Одноразовий посуд',
					},
					{
						id: 8,
						title: 'Чашки та склянки',
						link: 'category=Чашки та склянки',
					},
				],
			},
		],
	},
	{
		id: 9,
		title: 'Солодощі',
		link: '/cocoa-chocolate',
		subcategories: [
			{
				id: 1,
				title: 'Виробники',
				list: [
					{
						id: 1,
						title: 'Caffe Carraro',
						link: 'brands=Caffe Carraro',
					},
					{
						id: 2,
						title: 'Caotina',
						link: 'brands=Caotina',
					},
					{
						id: 3,
						title: 'Ferrero',
						link: 'brands=Ferrero',
					},
					{
						id: 4,
						title: 'Lindt',
						link: 'brands=Lindt',
					},
					{
						id: 5,
						title: 'Nescafe',
						link: 'brands=Nescafe',
					},
					{
						id: 6,
						title: 'Torras',
						link: 'brands=Torras',
					},
					{
						id: 7,
						title: 'Nespresso',
						link: 'brands=Nespresso',
					},
					{
						id: 8,
						title: 'Julius Meinl',
						link: 'brands=Julius Meinl',
					},
				],
			},
			{
				id: 2,
				title: 'Вид',
				list: [
					{
						id: 1,
						title: 'Какао',
						link: 'category=Какао',
					},
					{
						id: 2,
						title: 'Шоколад питний',
						link: 'category=Шоколад питний',
					},
					{
						id: 3,
						title: 'Шоколад',
						link: 'category=Шоколад',
					},
					{
						id: 4,
						title: 'Цукерки',
						link: 'category=Цукерки',
					},
					{
						id: 5,
						title: 'Цукор',
						link: 'category=Цукор',
					},
				],
			},
		],
	},
]

export { navigation, headerMenu }
