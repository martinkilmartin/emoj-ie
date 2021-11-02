import { NextRequest, NextResponse } from 'next/server'

// Block Austria, prefer Germany
const ALLOWED_COUNTRY = ['IE', 'CA', 'GB']
const BLOCKED_COUNTRY = ['US']

export async function middleware(req: NextRequest): Promise<Response> {
  const { nextUrl: url, geo } = req
  const country = geo.country || 'US'

  if (ALLOWED_COUNTRY.includes(country)) {
    url.searchParams.set('country', country)
    return NextResponse.rewrite(url)
  } else if (BLOCKED_COUNTRY.includes(country)) {
    return new Response('Blocked for legal reasons', { status: 451 })
  } else {
    return new Response('Limited audience', { status: 451 })
  }
}
