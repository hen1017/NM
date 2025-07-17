import { NextResponse } from 'next/server';
import { authOptions } from '@/lib/authOptions';
import { getServerSession } from 'next-auth';

export async function POST(req: Request) {
  const session = await getServerSession(authOptions);

  if (!session) {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
  }

  const body = await req.json();
  console.log("Received post:", body);

  // 模擬儲存資料成功
  return NextResponse.json({ message: "Post created", post: body }, { status: 201 });
}

