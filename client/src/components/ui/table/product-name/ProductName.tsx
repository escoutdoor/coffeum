import Link from 'next/link'
import { FC } from 'react'
import MiddleTitle from '../../heading/middle-title/MiddleTitle'
import { IProductItem } from '@/shared/interfaces/product.interface'

const ProductName: FC<{ product: IProductItem }> = ({ product }) => {
	return (
		<Link
			href={{
				pathname: '/product/[id]',
				query: { id: product.id },
			}}
		>
			<MiddleTitle
				style={{
					lineHeight: '32px',
				}}
			>
				{product.name}
			</MiddleTitle>
		</Link>
	)
}

export default ProductName
