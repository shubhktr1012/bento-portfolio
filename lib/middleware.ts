import { NextRequest, NextResponse } from 'next/server';
import { Ratelimit } from '@upstash/ratelimit';
import { kv } from '@vercel/kv';

const ratelimit = new Ratelimit({
    redis: kv,
    limiter: Ratelimit.slidingWindow(10, '10 s'), // 10 requests per 10 seconds
});

export default async function middleware(request: NextRequest) {
    // Only limit specific paths (e.g., API routes)
    if (request.nextUrl.pathname.startsWith('/api/contact')) {
        const ip = (request as any).ip || request.headers.get('x-forwarded-for') || '127.0.0.1';
        const { success } = await ratelimit.limit(ip);

        if (!success) {
            return new NextResponse('Too many requests', { status: 429 });
        }
    }
    return NextResponse.next();
}