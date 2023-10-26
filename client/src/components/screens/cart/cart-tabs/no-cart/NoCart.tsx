import DarkButton from '@/components/ui/dark-button/DarkButton'
import s from './no-cart.module.scss'
import { FC } from 'react'
import { useRouter } from 'next/router'
import { BiShoppingBag } from 'react-icons/bi'
import Text from '@/components/ui/heading/text/Text'

const NoCart: FC = () => {
	const { push } = useRouter()

	return (
		<div className={s.no__cart}>
			<div className={s.preview}>
				<BiShoppingBag />
				<Text>Кошик порожній</Text>
			</div>
			<DarkButton onClick={() => push('/search-products')}>
				повернутись в магазин
			</DarkButton>
		</div>
	)
}

export default NoCart
