'use client';

import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { redirect } from 'next/navigation';

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect('/admin/login');
  }

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif', color: 'white' }}>
      <h1>主人，歡迎回來，{session.user?.name}</h1>
      <p>這是管理員後台頁面</p>

      <h2 style={{ marginTop: '2rem' }}>文章列表</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '1rem' }}>
        <thead>
          <tr>
            <th style={{ borderBottom: '1px solid white', textAlign: 'left' }}>標題</th>
            <th style={{ borderBottom: '1px solid white', textAlign: 'left' }}>狀態</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>範例文章一</td>
            <td>已發佈</td>
          </tr>
          <tr>
            <td>範例文章二</td>
            <td>草稿</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

