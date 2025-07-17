import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();

  console.log("Received post:", body);

  // 模擬儲存資料成功
  return NextResponse.json(
    {
      message: "Post created",
      post: body,
    },
    { status: 201 }
  );
}

