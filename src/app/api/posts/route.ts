import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  const body = await req.json()
  console.log("✅ 接收到文章：", body)

  // 模擬儲存成功
  return NextResponse.json({
    message: "文章儲存成功",
    post: body,
  }, { status: 201 })
}

