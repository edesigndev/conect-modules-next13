import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  if (request.method === 'POST') {
    const data = request.body;

    console.log('Data:', data);

    return NextResponse.json(data);
  }
}
