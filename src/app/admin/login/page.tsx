export default function AdminLogin() {
  return (
    <main style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>後台登入</h1>
      <form>
        <div>
          <label>帳號：</label><br />
          <input type="text" name="username" />
        </div>
        <div>
          <label>密碼：</label><br />
          <input type="password" name="password" />
        </div>
        <button type="submit">登入</button>
      </form>
    </main>
  );
}

