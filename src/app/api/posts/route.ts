import { NextResponse } from "next/server";
import { addPost } from "@/lib/posts";

export async function POST(req: Request) {
  const body = await req.json();
  console.log("Received post:", body);

  // 儲存到模擬的 posts 陣列
  addPost({ title: body.title, content: body.content });

  return NextResponse.json(
    { message: "Post created", post: body },
    { status: 201 }
  );
}

