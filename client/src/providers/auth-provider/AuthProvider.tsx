import { FC, PropsWithChildren, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { useActions } from '@/hooks/useActions'
import { useAuth } from '@/hooks/useAuth'
import { EnumTokens, getAccessToken } from '@/services/auth/auth.helper'
import Cookies from 'js-cookie'
import { useProfile } from '@/hooks/useProfile'

const AuthProvider: FC<PropsWithChildren<unknown>> = ({ children }) => {
	const { user } = useAuth()
	const { isAdmin } = useProfile()
	const { checkAuth, logout } = useActions()
	const { pathname } = useRouter()

	useEffect(() => {
		if (isAdmin) {
			Cookies.set('isAdmin', 'true')
		} else {
			Cookies.remove('isAdmin')
		}
	}, [isAdmin])

	useEffect(() => {
		const accessToken = getAccessToken()

		if (accessToken) {
			checkAuth()
		}
	}, [])

	useEffect(() => {
		const refreshToken = Cookies.get(EnumTokens.REFRESH_TOKEN)
		if (!refreshToken && user) {
			logout()
		}
	}, [pathname])

	return <>{children}</>
}

export default AuthProvider
