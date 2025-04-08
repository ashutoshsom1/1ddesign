import { NextRequest, NextResponse } from 'next/server';

// This is a simple middleware for basic authentication
// In a real application, you would use a more secure authentication system
export function middleware(request: NextRequest) {
  // Check if the user is authenticated
  const isAuthenticated = request.cookies.get('admin_authenticated');
  
  // If not authenticated and not trying to login, redirect to login
  if (!isAuthenticated && !request.nextUrl.pathname.includes('/admin/login')) {
    return NextResponse.redirect(new URL('/admin/login', request.url));
  }
  
  return NextResponse.next();
}

export const config = {
  matcher: '/admin/:path*',
};
