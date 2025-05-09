import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Login({ theme = 'light', toggleTheme }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const cardBg = theme === 'dark' ? '#23222a' : '#fff';
  const cardText = theme === 'dark' ? '#fff' : '#18171c';
  const secondaryText = theme === 'dark' ? '#bdbdbd' : '#6b6b6b';
  const highlight = theme === 'dark' ? '#d6ff00' : '#b3d900';

  function handleLogin(e) {
    e.preventDefault();
    if (!email || !password) {
      setError('Please enter both email and password.');
      return;
    }
    // Mock login success
    setError('');
    navigate('/profile');
  }

  return (
    <div style={{ 
      background: theme === 'dark' ? '#18171c' : '#f7f7fa', 
      minHeight: '100vh', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center', 
      padding: '32px 0',
      transition: 'background 0.3s, color 0.3s'
    }}>
      {/* Theme Toggle */}
      <button onClick={toggleTheme} style={{ 
        position: 'fixed', 
        top: 18, 
        right: 18, 
        zIndex: 200, 
        background: theme === 'dark' ? '#23222a' : '#e0e0e0', 
        color: theme === 'dark' ? '#fff' : '#23222a', 
        border: 'none', 
        borderRadius: 18, 
        padding: '8px 16px', 
        fontWeight: 600, 
        cursor: 'pointer', 
        boxShadow: '0 2px 8px rgba(0,0,0,0.08)' 
      }}>
        {theme === 'dark' ? '🌙 Dark' : '☀️ Light'}
      </button>

      <div style={{ 
        background: cardBg, 
        borderRadius: 24, 
        boxShadow: '0 4px 24px rgba(0,0,0,0.12)', 
        padding: '40px 32px', 
        maxWidth: 400, 
        width: '100%',
        margin: '0 16px',
        transition: 'background 0.3s, color 0.3s'
      }}>
        <div style={{ textAlign: 'center', marginBottom: 32 }}>
          <h1 style={{ 
            fontSize: 32, 
            fontWeight: 800, 
            marginBottom: 8,
            color: cardText,
            transition: 'color 0.3s'
          }}>Welcome Back</h1>
          <p style={{ 
            fontSize: 16, 
            color: secondaryText,
            transition: 'color 0.3s'
          }}>Sign in to continue your journey</p>
        </div>

        <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <div>
            <label style={{ 
              display: 'block', 
              fontSize: 14, 
              fontWeight: 600, 
              marginBottom: 8,
              color: cardText,
              transition: 'color 0.3s'
            }}>Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              style={{ 
                width: '100%',
                padding: '14px 16px', 
                borderRadius: 12, 
                border: `2px solid ${theme === 'dark' ? '#35343c' : '#e0e0e0'}`,
                background: theme === 'dark' ? '#18171c' : '#fff',
                color: cardText,
                fontSize: 16,
                transition: 'all 0.3s',
                outline: 'none'
              }}
            />
          </div>

          <div>
            <label style={{ 
              display: 'block', 
              fontSize: 14, 
              fontWeight: 600, 
              marginBottom: 8,
              color: cardText,
              transition: 'color 0.3s'
            }}>Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              style={{ 
                width: '100%',
                padding: '14px 16px', 
                borderRadius: 12, 
                border: `2px solid ${theme === 'dark' ? '#35343c' : '#e0e0e0'}`,
                background: theme === 'dark' ? '#18171c' : '#fff',
                color: cardText,
                fontSize: 16,
                transition: 'all 0.3s',
                outline: 'none'
              }}
            />
          </div>

          {error && (
            <div style={{ 
              color: '#ff4d4f', 
              fontSize: 14, 
              fontWeight: 500,
              padding: '8px 12px',
              background: 'rgba(255,77,79,0.1)',
              borderRadius: 8,
              marginBottom: 4 
            }}>
              {error}
            </div>
          )}

          <button 
            type="submit" 
            style={{ 
              background: '#2d3bfa', 
              color: '#fff', 
              border: 'none', 
              borderRadius: 12, 
              padding: '16px 0', 
              fontWeight: 700, 
              fontSize: 16, 
              cursor: 'pointer', 
              boxShadow: '0 2px 12px rgba(45,59,250,0.18)',
              transition: 'transform 0.2s, box-shadow 0.2s'
            }}
            onMouseOver={e => {
              e.target.style.transform = 'translateY(-1px)';
              e.target.style.boxShadow = '0 4px 16px rgba(45,59,250,0.24)';
            }}
            onMouseOut={e => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = '0 2px 12px rgba(45,59,250,0.18)';
            }}
          >
            Sign In
          </button>
        </form>

        <div style={{ 
          marginTop: 24, 
          textAlign: 'center', 
          fontSize: 15,
          color: secondaryText,
          transition: 'color 0.3s'
        }}>
          Don't have an account?{' '}
          <Link 
            to="/register" 
            style={{ 
              color: '#2d3bfa', 
              fontWeight: 600, 
              textDecoration: 'none',
              transition: 'color 0.2s'
            }}
            onMouseOver={e => e.target.style.color = '#1a2af9'}
            onMouseOut={e => e.target.style.color = '#2d3bfa'}
          >
            Create Account
          </Link>
        </div>
      </div>
    </div>
  );
} 