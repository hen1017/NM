'use client';

import { signIn } from 'next-auth/react';
import { useState } from 'react';

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    await signIn('credentials', {
      username,
      password,
      redirect: true,
      callbackUrl: '/admin/dashboard',
    });
  };

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif', color: 'white' }}>
      <h1>後台登入</h1>
      <div style={{ background: 'lightblue', padding: '1rem' }}>
        <p>帳號：<input value={username} onChange={e => setUsername(e.target.value)} /></p>
        <p>密碼：<input type="password" value={password} onChange={e => setPassword(e.target.value)} /></p>
        <button onClick={handleLogin}>登入</button>
      </div>
    </div>
  );
}

