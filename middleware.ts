import { NextRequest, NextResponse } from 'next/server'

export const middleware = (request: NextRequest) => {
  return NextResponse.redirect(new URL('/todos', request.url))
}
export const config = {
  matcher: ['/about'],
}
export default middleware
