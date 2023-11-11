import s from './order-completion-tab.module.scss'
import { MdOutlineCelebration } from 'react-icons/md'
import { FC } from 'react'
import Text from '@/components/ui/heading/text/Text'
import DarkButton from '@/components/ui/dark-button/DarkButton'
import { useRouter } from 'next/navigation'

const OrderCompletionTab: FC = () => {
	const { push } = useRouter()

	return (
		<div className={s.completion}>
			<MdOutlineCelebration />
			<Text>Дякуємо за покупку</Text>
			<DarkButton onClick={() => push('/search-products')}>
				повернутись в магазин
			</DarkButton>
		</div>
	)
}

export default OrderCompletionTab
