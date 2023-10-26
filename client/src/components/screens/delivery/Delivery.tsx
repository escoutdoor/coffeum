import { NextPage } from 'next'
import s from './delivery.module.scss'
import Layout from '@/components/layout/Layout'
import PageHeader from '@/components/ui/page-header/PageHeader'
import Section from '@/components/ui/section/Section'
import AttentionBox from './attention-box/AttentionBox'
import PaymentSection from './payment-section/PaymentSection'

const Delivery: NextPage = () => {
	return (
		<Layout
			title="Доставка та оплата"
			description="Зручна доставка по Україні та Києву! Отримайте своє замовлення через службу доставки «Нова Пошта» або нашу кур'єрську службу в Києві. Різноманітні способи оплати: готівкою або післяплатою."
		>
			<PageHeader title="Доставка та оплата" />
			<div className={s.delivery}>
				<Section
					id={1}
					title="Доставка по Україні"
					text={[
						'Доставка товарів в будь-яке місто України здійснюється через службу доставки «Нова Пошта».',
						'Вартість доставки замовлень на суму до 1700 грн. – згідно з тарифами «НП». Замовлення більш як 1700 грн. доставляються в відділення безкоштовно.',
					]}
				/>
				<AttentionBox
					text={[
						'Зверніть увагу: адресна доставка оплачується додатково, згідно з тарифами «НП».',
						'Вартість послуги «Платіж при отриманні» оплачується додатково клієнтом та розраховується у розмірі 2% від вартості відправлення + 20 грн.',
					]}
				/>
				<Section
					id={2}
					title="Доставка по Києву"
					text={[
						'Доставка товарів по Києву здійснюється нашою кур’єрською службою.',
						'Вартість доставки замовлень на суму до 1700 грн. – 60 грн. Замовлення на суму понад 1700 грн. доставляються безкоштовно.',
					]}
				/>
				<Section
					id={3}
					title="Самовивіз у Києві"
					text={['Отримати замовлення можна у нашому офісі, за попереднім бронюванням.']}
				/>
				<PaymentSection />
			</div>
		</Layout>
	)
}

export default Delivery
