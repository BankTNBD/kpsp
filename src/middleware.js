import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'

const protectedRoutes = ['/admin', '/api/post']
const publicRoutes = ['/login']

export default async function middleware(req) {
    const path = req.nextUrl.pathname

    // const isProtectedRoute = protectedRoutes.some(route => path.startsWith(route));
    const isProtectedRoute = protectedRoutes.includes(path);
    const isPublicRoute = publicRoutes.includes(path);

    const session = (await cookies()).get('session')?.value;

    if (isProtectedRoute && !session) {
        return NextResponse.redirect(new URL('/login', req.nextUrl))
    }

    if (isPublicRoute && session) {
        return NextResponse.redirect(new URL('/admin', req.nextUrl))
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/login', '/admin/:path*', '/api/post/:path*'],
}