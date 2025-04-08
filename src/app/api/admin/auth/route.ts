import { NextRequest, NextResponse } from 'next/server';

// In a real application, you would use a secure authentication system
// This is a simple example with a hardcoded password
const ADMIN_PASSWORD = 'admin123'; // This should be stored securely in environment variables

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { password } = body;
    
    if (password === ADMIN_PASSWORD) {
      // Create a response with a cookie
      const response = NextResponse.json({ success: true });
      
      // Set a cookie to indicate authentication
      response.cookies.set({
        name: 'admin_authenticated',
        value: 'true',
        path: '/',
        maxAge: 60 * 60, // 1 hour
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
      });
      
      return response;
    } else {
      return NextResponse.json(
        { error: 'Invalid password' },
        { status: 401 }
      );
    }
  } catch (error) {
    console.error('Authentication error:', error);
    return NextResponse.json(
      { error: 'Authentication failed' },
      { status: 500 }
    );
  }
}
