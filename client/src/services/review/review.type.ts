import { IReview } from '@/shared/interfaces/product.interface'

export type ReviewInfo = Omit<IReview, 'id' | 'author' | 'createdAt'> & { productId: string }
