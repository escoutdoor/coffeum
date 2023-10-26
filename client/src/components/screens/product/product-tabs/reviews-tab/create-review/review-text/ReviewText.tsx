import s from './review-text.module.scss'
import { FC } from 'react'

interface IReviewText {
	text: string
	handleText: (value: string) => void
}

const ReviewText: FC<IReviewText> = ({ text, handleText }) => {
	return <textarea value={text} onChange={e => handleText(e.target.value)} className={s.text}></textarea>
}

export default ReviewText
