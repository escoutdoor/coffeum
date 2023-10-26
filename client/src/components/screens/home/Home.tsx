import s from './home.module.scss'
import Layout from '@/components/layout/Layout'
import { useState } from 'react'
import { NextPage } from 'next'
import Advantages from './advantages/Advantages'
import Categories from './categories/Categories'

import CategoryCarousel from './category-carousel/CategoryCarousel'
import Catalog from './catalog/Catalog'
import Slider from './slider/Slider'

import { products } from '@/helpers/products'
import { catalog } from '@/helpers/catalog'
import CarouselWithTitle from '@/components/ui/carousel-with-title/CarouselWithTitle'

const Home: NextPage = () => {
	return (
		<Layout
			title="Головна"
			description="Захоплюючий світ кави та незамінні аксесуари для справжніх поціновувачів. "
		>
			<div className={s.home}>
				<Slider />
				<Advantages />
				<Categories />
				<CarouselWithTitle title="знижки" products={products} />
				<div className={s.carousels}>
					<CategoryCarousel
						title="популярні товари"
						products={products}
					/>
					<CategoryCarousel
						title="нові надходження"
						products={products}
					/>
					<CategoryCarousel title="уцінка" products={products} />
				</div>
				<div className={s.sections}>
					<Catalog
						sections={catalog}
						title="«Кофєум» – кава, кавомашини, аксесуари"
					/>
				</div>
			</div>
		</Layout>
	)
}

export default Home
