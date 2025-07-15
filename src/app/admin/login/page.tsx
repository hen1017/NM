'use client';

import { signIn } from 'next-auth/react';
import { useState } from 'react';

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    console.log('👉 送出登入', username, password);

    const res = await signIn('credentials', {
      username,
      password,
      redirect: true,
      callbackUrl: '/admin/dashboard',
    });

    console.log('✅ 登入結果', res);
  };

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif', color: 'white' }}>
      <h1>後台登入</h1>
      <p>帳號：
        <input
          type="text"
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
      </p>
      <p>密碼：
        <input
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
      </p>
      <button onClick={handleLogin}>登入</button>
    </div>
  );
}

