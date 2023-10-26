import SectionTitle from '@/components/ui/heading/section-title/SectionTitle'
import s from './section.module.scss'
import { ISection } from '@/shared/interfaces/section.interfaces'
import { FC } from 'react'
import Text from '@/components/ui/heading/text/Text'

const Section: FC<ISection> = ({ id, title, text, list, conclusions }) => {
	return (
		<div>
			<SectionTitle
				style={{
					marginBottom: '16px',
					lineHeight: '42px',
				}}
			>
				{title}
			</SectionTitle>
			{text.map((t, index) => (
				<Text
					key={index}
					style={{
						marginBottom: '20px',
					}}
				>
					{t}
				</Text>
			))}
			<ul className={s.list}>
				{list?.map((item, index) => (
					<li key={index}>{item}</li>
				))}
			</ul>
			{conclusions?.map((conclusion, index) => (
				<Text
					key={index}
					style={{
						marginBottom: '20px',
					}}
				>
					{conclusion}
				</Text>
			))}
		</div>
	)
}

export default Section
