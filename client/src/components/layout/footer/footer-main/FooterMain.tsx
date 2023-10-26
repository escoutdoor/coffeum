import s from './footer-main.module.scss'
import { FC } from 'react'
import Ribbon from './ribbon/Ribbon'
import Link from 'next/link'
import SubInput from './sub-input/SubInput'
import SocialIcons from '@/components/ui/social-icons/SocialIcons'

const FooterMain: FC = () => {
	return (
		<div className={s.footer__main}>
			<div className="wrapper">
				<Ribbon />
				<div className={s.container}>
					<div className={s.widget}>
						<h1 className={s.title}>контакти</h1>
						<ul>
							<li>Токіо, Сібуя, Йойоґі-Камідзоно 1—1</li>
							<li>
								<Link href={'tel:0000000000'}>000 000-000-0</Link>
							</li>
							<li>
								<Link href={'tel:1111111111'}>111 111-111-1</Link>
							</li>
							<li>Пн.-Пт. с 10:00 до 17:00</li>
						</ul>
						<SocialIcons />
					</div>
					<div className={s.widget}>
						<h1 className={s.title}>корисна інформація</h1>
						<ul>
							<li>
								<Link href={''}>Дисконтна програма</Link>
							</li>
							<li>
								<Link href={''}>Статті</Link>
							</li>
							<li>
								<Link href={''}>Умови використання сайту</Link>
							</li>
							<li>
								<Link href={''}>Повернення товарів</Link>
							</li>
						</ul>
					</div>
					<div className={s.widget}>
						<h1 className={s.title}>підписка на новини</h1>
						<p>Отримайте всю найсвіжішу інформацію. Підпишіться на нашу розсилку новин</p>
						<SubInput />
					</div>
				</div>
			</div>
		</div>
	)
}

export default FooterMain
