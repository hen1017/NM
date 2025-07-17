"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function NewPostPage() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch("/api/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, content }),
    });

    if (res.ok) {
      const result = await res.json();
      console.log("Post created:", result);
      router.push("/admin/dashboard");
    } else {
      alert("Failed to create post");
    }
  };

  return (
    <div>
      <h1>新增文章頁面</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>標題：</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label>內文：</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />
        </div>
        <button type="submit">送出</button>
      </form>
    </div>
  );
}

