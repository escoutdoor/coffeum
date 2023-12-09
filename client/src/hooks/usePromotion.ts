import { PromotionService } from '@/services/promotion/promotion.service'
import { useQuery } from '@tanstack/react-query'

export const usePromotion = (id: string) => {
	const {
		data: promotion,
		isLoading,
		isError,
	} = useQuery({
		queryKey: ['promotion', id],
		queryFn: async () => await PromotionService.getById(id),
		select: ({ data }) => data,
		enabled: !!id,
	})

	return { promotion, isLoading, isError }
}
