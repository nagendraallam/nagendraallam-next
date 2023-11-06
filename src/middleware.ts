
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
    const requestHeaders = new Headers(request.headers);
    requestHeaders.set('x-url', request.url.split('/').pop() || '');

    return NextResponse.next({
        request: {
            // Apply new request headers
            headers: requestHeaders,
        }
    });
}

// See "Matching Paths" below to learn more
export const config = {
    matcher: '/:path*',
}