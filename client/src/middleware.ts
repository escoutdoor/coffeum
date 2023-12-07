import { EnumTokens } from '@/services/auth/auth.helper'
import { NextRequest, NextResponse } from 'next/server'

const privateRoutes = ['/dashboard', '/cart']

export function middleware(request: NextRequest) {
	const token = request.cookies.get(EnumTokens.ACCESS_TOKEN)

	const isAdmin = request.cookies.get('isAdmin')

	const url = request.url

	const isPrivateRoute = privateRoutes.some(route => url.includes(route))
	const isAdminRoute = url.includes('/dashboard')

	if (isAdminRoute && !isAdmin) {
		return NextResponse.redirect(new URL('/403', url))
	}

	if (!token && isPrivateRoute) {
		return NextResponse.redirect(new URL('/my-account', url))
	}
}

export const config = {
	matcher: ['/cart', '/dashboard/:path*'],
}
