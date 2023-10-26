import s from './discounts.module.scss'
import Layout from '@/components/layout/Layout'
import SectionTitle from '@/components/ui/heading/section-title/SectionTitle'
import Text from '@/components/ui/heading/text/Text'
import PageHeader from '@/components/ui/page-header/PageHeader'
import { NextPage } from 'next'
import StatsItem from './stats-item/StatsItem'

const Discounts: NextPage = () => {
	return (
		<Layout
			title="Знижки"
			description="Економте з нами! Отримайте 3% знижки при реєстрації та 5% при замовленні від 5000 грн. Звертайтеся за оптовими цінами для вашого бізнесу!"
		>
			<PageHeader title="Знижки" />
			<div className={s.discounts}>
				<SectionTitle>Клієнтам</SectionTitle>
				<Text>
					Для постійних клієнтів в нашому магазині діє система знижок:
				</Text>
				<div className={s.stats}>
					<StatsItem
						title="3%"
						description="при реєстрації на сайті"
					/>
					<StatsItem
						title="5%"
						description="при сумі замовлень від 5000 грн."
					/>
				</div>
				<Text>
					Знижка діє на всі товари, окрім кавоварок, кавомашин та
					іншого електрообладнання.
				</Text>
				<Text>
					Персональна знижка не поширюється на акції та уцінені товари
					(з червоним цінником).
				</Text>
				<h1 className={s.warning}>
					Увага! Для авторизованих клієнтів ціни відображаються з
					урахуванням персональної знижки.
				</h1>
				<SectionTitle>Партнерам</SectionTitle>
				<Text>Оптові ціни обговорюються індивідуально за тел. </Text>
			</div>
		</Layout>
	)
}

export default Discounts
