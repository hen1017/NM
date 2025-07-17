'use client';

import { useState } from 'react';

export default function NewPostPage() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!title || !content) {
      setMessage('請填寫標題和內文');
      return;
    }

    const res = await fetch('/api/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title, content }),
    });

    if (res.ok) {
      setMessage('✅ 文章已成功送出');
      setTitle('');
      setContent('');
    } else {
      setMessage('❌ 發生錯誤，請稍後再試');
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
      {message && <p>{message}</p>}
    </div>
  );
}

