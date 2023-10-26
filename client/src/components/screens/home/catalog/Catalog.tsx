import { ICatalog } from '@/shared/interfaces/section.interfaces'
import s from './catalog.module.scss'
import { FC } from 'react'
import Section from '@/components/ui/section/Section'

const Catalog: FC<ICatalog> = ({ title, sections }) => {
	return (
		<div className={s.catalog}>
			<h1 className={s.catalog__header}>{title}</h1>
			<div className={s.sections}>
				{sections.map(section => (
					<Section
						key={section.id}
						id={section.id}
						conclusions={section.conclusions}
						title={section.title}
						text={section.text}
						list={section.list}
					/>
				))}
			</div>
		</div>
	)
}

export default Catalog
