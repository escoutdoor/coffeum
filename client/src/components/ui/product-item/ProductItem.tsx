import s from './product-item.module.scss'
import { IProductItem } from '@/shared/interfaces/product.interface'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import { BsArrowRight } from 'react-icons/bs'
import { AiOutlineShopping } from 'react-icons/ai'
import { useActions } from '@/hooks/useActions'
import ProductRating from '../product-rating/ProductRating'
import ProductPrice from '../product-price/ProductPrice'
import CategoryList from './category-list/CategoryList'

const ProductItem: FC<{ item: IProductItem; view?: string }> = ({
	item,
	view,
}) => {
	const isList = view === 'list'

	const { addToCart } = useActions()

	return (
		<div
			className={
				isList
					? `${s.product} ${s.row} ${item.quantity ? '' : s.gray}`
					: `${s.product} ${item.quantity ? '' : s.gray}`
			}
		>
			<Link href={`/product/${item?.id}`}>
				<Image
					src={`/images/img/products/${
						item.image ? item.image : 'no-image.jpg'
					}`}
					priority
					width={250}
					height={267}
					alt="product_image"
				/>
			</Link>
			<div className={s.details}>
				{item.quantity === 0 && <p>Немає в наявності</p>}
				<CategoryList categories={item.categories} />
				<Link className={s.title} href={`/product/${item.id}`}>
					{item.name}
				</Link>
				<ProductRating productId={item.id} />
				<ProductPrice
					originalPrice={item.originalPrice}
					discountedPrice={item.discountedPrice}
					size="sm"
				/>
				{!item.quantity ? (
					<Link href={`/product/${item.id}`}>
						<button className={s.button}>
							<BsArrowRight />
							читати далі
						</button>
					</Link>
				) : (
					<button
						className={s.button}
						onClick={() =>
							addToCart({
								product: item,
								quantity: 1,
							})
						}
					>
						<AiOutlineShopping />
						додати у кошик
					</button>
				)}
			</div>
		</div>
	)
}

export default ProductItem
