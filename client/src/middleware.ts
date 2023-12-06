import { EnumTokens } from '@/services/auth/auth.helper'
import { NextRequest, NextResponse } from 'next/server'
import { useProfile } from './hooks/useProfile'

const privateRoutes = ['/dashboard', '/cart']

export default function middleware(request: NextRequest) {
	const verify = request.cookies.get(EnumTokens.ACCESSTOKEN)

	const url = request.url

	if (!verify && privateRoutes.some(route => url.includes(route))) {
		return NextResponse.redirect(new URL('/my-account', url))
	}
}
