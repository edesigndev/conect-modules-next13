import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const res = await req.json();

  return new NextResponse(JSON.stringify(res), {
    status: res.status,
  });
}