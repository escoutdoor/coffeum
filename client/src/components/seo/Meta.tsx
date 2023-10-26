import { FC, PropsWithChildren } from 'react'
import IMeta from '@/shared/interfaces/meta.inteface'
import Head from 'next/head'
import { getTitle } from '@/utils/meta'

const Meta: FC<PropsWithChildren<IMeta>> = ({
	title,
	description,
	children,
}) => {
	return (
		<>
			<Head>
				<title>{getTitle(title)}</title>
				{description && (
					<>
						<meta name="description" content={description} />

						<meta name="og:title" content={getTitle(title)} />
						<meta name="og:description" content={description} />

						<link
							rel="shortcut icon"
							href="/images/favicon.png"
							type="image/x-icon"
						/>
					</>
				)}
			</Head>

			{children}
		</>
	)
}

export default Meta
