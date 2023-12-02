import '@/styles/globals.scss'
import '@smastrom/react-rating/style.css'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { persistor, store } from '@/store/store'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { PersistGate } from 'redux-persist/integration/react'
import AuthProvider from '@/providers/auth-provider/AuthProvider'

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
		},
	},
})

export default function App({ Component, pageProps }: AppProps) {
	return (
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<QueryClientProvider client={queryClient}>
					<AuthProvider>
						<Component {...pageProps} />
					</AuthProvider>
				</QueryClientProvider>
			</PersistGate>
		</Provider>
	)
}
