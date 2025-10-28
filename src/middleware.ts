import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const userAgent = request.headers.get('user-agent') || ''
  
  // Special handling for Facebook bot
  if (userAgent.includes('facebookexternalhit') || userAgent.includes('Facebot')) {
    // Allow Facebook bot to access everything
    const response = NextResponse.next()
    
    // Add headers to help Facebook
    response.headers.set('X-Robots-Tag', 'index, follow')
    response.headers.set('Access-Control-Allow-Origin', '*')
    
    return response
  }
  
  return NextResponse.next()
}

// Apply middleware to all routes
export const config = {
  matcher: '/:path*',
}
