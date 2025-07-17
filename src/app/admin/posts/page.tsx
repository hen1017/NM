import { getPosts } from "@/lib/posts";
import Link from "next/link";

export default async function PostsPage() {
  const posts = await getPosts();

  return (
    <div>
      <h1>文章列表</h1>
      <Link href="/admin/posts/new">➕ 新增文章</Link>
      <ul>
        {posts.map((post: any, index: number) => (
          <li key={index}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

