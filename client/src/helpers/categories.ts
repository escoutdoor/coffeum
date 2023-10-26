export interface ICategoryMain {
	id: number
	title: string
	image: string
	link: string
}

const categories: ICategoryMain[] = [
	{
		id: 1,
		title: 'Кава',
		image: 'coffee_beans.png',
		link: '/coffee',
	},
	{
		id: 2,
		title: 'Кавове обладнання',
		image: 'machine.jpg',
		link: '/coffee-machines',
	},
	{
		id: 3,
		title: 'Аксесуари та сервіс',
		image: 'accessories.jpg',
		link: '/accessories',
	},
	{
		id: 4,
		title: 'Какао, шоколад, солодощі',
		image: 'cacao.jpg',
		link: 'cocoa-chocolate',
	},
	{
		id: 5,
		title: 'Чай',
		image: 'tea.jpg',
		link: 'tea',
	},
]

export { categories }
