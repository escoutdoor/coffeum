import { ISidebarData } from '@/shared/interfaces/sidebar.interface'

const sideBarDataCoffee: ISidebarData = {
	brands: [
		'Віденська кава',
		'Tchibo',
		'Nespresso',
		'Jacobs',
		'Belmio',
		'illy',
		'Caffe Poli',
		'Gimoka',
		'L’or',
		'Caffe Carraro',
		'Malongo',
		'Lavazza',
		'Kimbo',
		'Blasercafe',
		'Melitta',
		'Starbucks',
		'Dallmayr',
	],
	countries: [
		'Швейцарія',
		'Франція',
		'Німеччина',
		'Україна',
		'США',
		'Бельгія',
		'Італія',
	],
	initialMinPrice: 7,
	initialMaxPrice: 2328,
	availability: ['Приховати товари "Немає в наявності'],
	composition: [
		'Арабіка 40%',
		'Робуста 60%',
		'Арабіка 90%',
		'Робуста 10%',
		'Арабіка 20%',
		'Робуста 80%',
		'Арабіка 100%',
		'Арабіка 30%',
		'Робуста 70%',
		'Арабіка 50%',
		'Робуста 50%',
		'Робуста 30%',
		'Арабіка 75%',
		'Робуста 25%',
	],
	packing: [
		'12 капсул',
		'120 капсул',
		'500 г',
		'10 капсул',
		'400 г',
		'1 кг',
		'200 г',
		'750 г',
		'250 г',
		'16 капсул',
		'1 монодоза',
	],
}

const sideBarDataMarkDown: ISidebarData = {
	brands: [
		'Belmio',
		'Starbucks',
		'illy',
		'Julius Meinl',
		'L’or',
		'Nescafe',
		'Nespresso',
	],
	countries: ['Австрія', 'Бельгія', 'Італія', 'США', 'Франція', 'Швейцарія'],
	initialMinPrice: 0,
	initialMaxPrice: 100000,
	availability: ['Приховати товари "Немає в наявності'],
	composition: ['Арабіка 100%', 'Арабіка 50%', 'Робуста 50%'],
	packing: ['10 капсул', '12 капсул', '16 капсул', '250 г'],
}

const sideBarDataTea: ISidebarData = {
	brands: [
		'Belmio',
		'Starbucks',
		'illy',
		'Julius Meinl',
		'L’or',
		'Nescafe',
		'Nespresso',
	],
	countries: ['Австрія', 'Бельгія', 'Італія', 'США', 'Франція', 'Швейцарія'],
	initialMinPrice: 0,
	initialMaxPrice: 100000,
	availability: ['Приховати товари "Немає в наявності'],
	composition: ['Арабіка 100%', 'Арабіка 50%', 'Робуста 50%'],
	packing: ['10 капсул', '12 капсул', '16 капсул', '250 г'],
}

const sideBarDataAccessories: ISidebarData = {
	brands: [
		'Belmio',
		'Starbucks',
		'illy',
		'Julius Meinl',
		'L’or',
		'Nescafe',
		'Nespresso',
	],
	countries: ['Австрія', 'Бельгія', 'Італія', 'США', 'Франція', 'Швейцарія'],
	initialMinPrice: 0,
	initialMaxPrice: 100000,
	availability: ['Приховати товари "Немає в наявності'],
	composition: ['Арабіка 100%', 'Арабіка 50%', 'Робуста 50%'],
	packing: ['10 капсул', '12 капсул', '16 капсул', '250 г'],
}

const sideBarDataCocoaChocolate: ISidebarData = {
	brands: [
		'Belmio',
		'Starbucks',
		'illy',
		'Julius Meinl',
		'L’or',
		'Nescafe',
		'Nespresso',
	],
	countries: ['Австрія', 'Бельгія', 'Італія', 'США', 'Франція', 'Швейцарія'],
	initialMinPrice: 0,
	initialMaxPrice: 100000,
	availability: ['Приховати товари "Немає в наявності'],
	composition: ['Арабіка 100%', 'Арабіка 50%', 'Робуста 50%'],
	packing: ['10 капсул', '12 капсул', '16 капсул', '250 г'],
}

const sidebarDataCoffeeMachines: ISidebarData = {
	brands: [
		'Belmio',
		'Starbucks',
		'illy',
		'Julius Meinl',
		'L’or',
		'Nescafe',
		'Nespresso',
	],
	countries: ['Австрія', 'Бельгія', 'Італія', 'США', 'Франція', 'Швейцарія'],
	initialMinPrice: 0,
	initialMaxPrice: 100000,
	availability: ['Приховати товари "Немає в наявності'],
	composition: ['Арабіка 100%', 'Арабіка 50%', 'Робуста 50%'],
	packing: ['10 капсул', '12 капсул', '16 капсул', '250 г'],
}

export const sidebarData = {
	coffee: sideBarDataCoffee,
	markdown: sideBarDataMarkDown,
	tea: sideBarDataTea,
	accessories: sideBarDataAccessories,
	cocoaChocolate: sideBarDataCocoaChocolate,
	coffeeMachines: sidebarDataCoffeeMachines,
}
