import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  // Clone the request headers and set a new header `x-version`
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set('x-version', '13');

  const isAuthenticated = true;
  if (!isAuthenticated) {
    // Respond with JSON indicating an error message
    return NextResponse.json(
      {
        success: false,
        message: 'Auth failed',
      },
      {
        status: 401,
      },
    );
  }

  // You can also set request headers in NextResponse.rewrite
  const response = NextResponse.next({
    request: {
      // New request headers
      headers: requestHeaders,
    },
  });

  // Set a new response header `x-version`
  response.headers.set('x-version', '13');
  return response;
}
