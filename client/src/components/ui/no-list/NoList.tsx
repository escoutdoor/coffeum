import s from './no-list.module.scss'
import { FC } from 'react'
import { useRouter } from 'next/router'
import { BiShoppingBag } from 'react-icons/bi'
import DarkButton from '@/components/ui/dark-button/DarkButton'
import Text from '@/components/ui/heading/text/Text'

const NoList: FC<{ message: string }> = ({ message }) => {
	const { push } = useRouter()

	return (
		<div className={s.no__list}>
			<div className={s.preview}>
				<BiShoppingBag />
				<Text>{message}</Text>
			</div>
			<DarkButton onClick={() => push('/search-products')}>
				повернутись в магазин
			</DarkButton>
		</div>
	)
}

export default NoList
