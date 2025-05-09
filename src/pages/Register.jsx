import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  function handleRegister(e) {
    e.preventDefault();
    if (!name || !email || !password) {
      setError('Please fill all fields.');
      return;
    }
    // Mock register success
    setError('');
    navigate('/profile');
  }

  return (
    <div style={{ background: '#f7f7fa', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '32px 0' }}>
      <div style={{ background: '#fff', borderRadius: 18, boxShadow: '0 2px 12px #e0e0e0', padding: 36, maxWidth: 400, width: '100%' }}>
        <h1 style={{ fontSize: 26, fontWeight: 800, marginBottom: 18, textAlign: 'center' }}>Register</h1>
        <form onSubmit={handleRegister} style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={e => setName(e.target.value)}
            style={{ padding: '12px 16px', borderRadius: 10, border: '1.5px solid #e0e0e0', fontSize: 16 }}
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            style={{ padding: '12px 16px', borderRadius: 10, border: '1.5px solid #e0e0e0', fontSize: 16 }}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            style={{ padding: '12px 16px', borderRadius: 10, border: '1.5px solid #e0e0e0', fontSize: 16 }}
          />
          {error && <div style={{ color: '#ff4d4f', fontSize: 14, marginBottom: 4 }}>{error}</div>}
          <button type="submit" style={{ background: '#2d3bfa', color: '#fff', border: 'none', borderRadius: 10, padding: '12px 0', fontWeight: 700, fontSize: 16, cursor: 'pointer', boxShadow: '0 2px 8px rgba(0,0,0,0.10)' }}>Register</button>
        </form>
        <div style={{ marginTop: 18, textAlign: 'center', fontSize: 15 }}>
          Already have an account?{' '}
          <Link to="/login" style={{ color: '#2d3bfa', fontWeight: 600, textDecoration: 'underline' }}>Login</Link>
        </div>
      </div>
    </div>
  );
} 