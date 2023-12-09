import { PromotionService } from '@/services/promotion/promotion.service'
import { useQuery } from '@tanstack/react-query'

export const usePromotions = () => {
	const {
		data: promotions,
		isLoading,
		isError,
	} = useQuery({
		queryKey: ['promotions'],
		queryFn: async () => await PromotionService.getAll(),
		select: ({ data }) => data,
	})

	return { promotions, isLoading, isError }
}
