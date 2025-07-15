return (
  <div style={{ 
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: '#111',
  }}>
    <div style={{ 
      padding: '2rem',
      borderRadius: '8px',
      background: '#f9f9f9',
      boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
      color: '#333',
      width: '300px'
    }}>
      <h1 style={{ textAlign: 'center', marginBottom: '1rem' }}>後台登入</h1>
      
      <p>帳號：
        <input 
          type="text" 
          value={username} 
          onChange={e => setUsername(e.target.value)} 
          style={{ width: '100%' }}
        />
      </p>

      <p>密碼：
        <input 
          type="password" 
          value={password} 
          onChange={e => setPassword(e.target.value)} 
          style={{ width: '100%' }}
        />
      </p>

      <button 
        onClick={handleLogin} 
        style={{ 
          marginTop: '1rem', 
          width: '100%', 
          padding: '0.5rem', 
          backgroundColor: '#e74c3c', 
          color: 'white', 
          border: 'none', 
          borderRadius: '4px' 
        }}
      >
        登入
      </button>
    </div>
  </div>
);

