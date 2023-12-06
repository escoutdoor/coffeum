import Image from 'next/image'
import s from './loading.module.scss'

const Loading = ({ full }: { full?: boolean }) => {
	return (
		<div className={full ? `${s.loading} ${s.full}` : s.loading}>
			<Image
				src={'/images/loading.gif'}
				width={0}
				height={0}
				className={s.image}
				alt="loading.gif"
			/>
		</div>
	)
}

export default Loading
