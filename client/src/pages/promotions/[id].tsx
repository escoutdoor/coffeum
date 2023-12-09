import PromotionInfo from '@/components/screens/promotion-info/PromotionInfo'
import Loading from '@/components/ui/loading/Loading'
import { usePromotion } from '@/hooks/usePromotion'
import { useParams } from 'next/navigation'
import { useRouter } from 'next/router'

export default function PromotionInfoPage() {
	const {
		query: { id },
	} = useRouter()

	const { promotion, isLoading } = usePromotion(id as string)

	return (
		<>
			{isLoading ? (
				<Loading />
			) : (
				promotion && <PromotionInfo promotion={promotion} />
			)}
		</>
	)
}
