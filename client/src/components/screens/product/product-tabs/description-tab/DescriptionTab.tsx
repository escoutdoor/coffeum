import Text from '@/components/ui/heading/text/Text'
import { FC } from 'react'

const DescriptionTab: FC<{ description: string }> = ({ description }) => {
	return <Text>{description}</Text>
}

export default DescriptionTab
