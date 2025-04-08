import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  // Check if the path is for the admin area
  if (request.nextUrl.pathname.startsWith('/admin')) {
    // Check if the user is authenticated
    const isAuthenticated = request.cookies.get('admin_authenticated');
    
    // If not authenticated and not trying to login, redirect to login
    if (!isAuthenticated && !request.nextUrl.pathname.includes('/admin/login')) {
      return NextResponse.redirect(new URL('/admin/login', request.url));
    }
  }
  
  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*'],
};
