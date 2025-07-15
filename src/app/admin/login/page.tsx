return (
  <div style={{ 
    height: '100vh', 
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center', 
    backgroundColor: '#111' 
  }}>
    <div style={{ 
      backgroundColor: '#f0f4ff', 
      padding: '2rem', 
      borderRadius: '8px', 
      boxShadow: '0 4px 12px rgba(0,0,0,0.3)', 
      minWidth: '300px' 
    }}>
      <h2 style={{ textAlign: 'center', color: '#222' }}>後台登入</h2>
      <p>帳號：<input value={username} onChange={e => setUsername(e.target.value)} style={{ width: '100%' }} /></p>
      <p>密碼：<input type="password" value={password} onChange={e => setPassword(e.target.value)} style={{ width: '100%' }} /></p>
      <button onClick={handleLogin} style={{
        marginTop: '1rem',
        width: '100%',
        padding: '0.5rem',
        backgroundColor: '#d33',
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer'
      }}>登入</button>
    </div>
  </div>
);

