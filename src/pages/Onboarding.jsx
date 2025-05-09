import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const travelGroups = [
  { label: 'Solo', icon: '👤' },
  { label: 'Couple', icon: '👫' },
  { label: 'Family', icon: '👨‍👩‍👧‍👦' },
  { label: 'Friends', icon: '🧑‍🤝‍🧑' },
];

function Onboarding({ theme = 'dark', toggleTheme, onContinue }) {
  const [destination, setDestination] = useState('');
  const [duration, setDuration] = useState('');
  const [group, setGroup] = useState('');
  const [error, setError] = useState('');
  const durations = ['1-3 Days', '4-7 Days', '8-14 Days', '15+ Days'];
  const navigate = useNavigate();

  function handleContinue() {
    if (!destination || !duration || !group) {
      setError('Please fill all fields.');
      return;
    }
    setError('');
    onContinue();
  }

  return (
    <div className={theme} style={{ maxWidth: 400, margin: '0 auto', padding: '2rem 1rem', minHeight: '100vh', background: theme === 'dark' ? 'linear-gradient(135deg, #18171c 60%, #23222a 100%)' : 'linear-gradient(135deg, #f7f7fa 60%, #e0e0e0 100%)', color: theme === 'dark' ? '#fff' : '#18171c', transition: 'background 0.3s, color 0.3s' }}>
      {/* Theme Toggle */}
      <button onClick={toggleTheme} style={{ position: 'fixed', top: 18, right: 18, zIndex: 200, background: theme === 'dark' ? '#23222a' : '#e0e0e0', color: theme === 'dark' ? '#fff' : '#23222a', border: 'none', borderRadius: 18, padding: '8px 16px', fontWeight: 600, cursor: 'pointer', boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}>
        {theme === 'dark' ? '🌙 Dark' : '☀️ Light'}
      </button>
      <div style={{ marginBottom: 32 }}>
        <div style={{ fontSize: 28, fontWeight: 700, marginBottom: 6 }}>Plan Your Journey, Your Way!</div>
        <div style={{ color: '#bdbdbd', fontSize: 15 }}>Let's create your personalised travel experience</div>
      </div>
      <div style={{ marginBottom: 18 }}>
        <div style={{ fontWeight: 600, fontSize: 16, marginBottom: 6 }}>Where would you like to go?</div>
        <div style={{ display: 'flex', alignItems: 'center', background: theme === 'dark' ? '#23222a' : '#fff', borderRadius: 8, padding: '0 10px', border: '2px solid #6c63ff' }}>
          <span style={{ fontSize: 20, marginRight: 6 }}>📍</span>
          <input
            type="text"
            placeholder="Enter Destination"
            value={destination}
            onChange={e => setDestination(e.target.value)}
            style={{
              background: 'transparent',
              border: 'none',
              outline: 'none',
              color: theme === 'dark' ? '#fff' : '#18171c',
              fontSize: 16,
              flex: 1,
              padding: '10px 0',
            }}
          />
        </div>
      </div>
      <div style={{ marginBottom: 18 }}>
        <div style={{ fontWeight: 600, fontSize: 16, marginBottom: 6 }}>How long will you stay?</div>
        <div style={{ display: 'flex', alignItems: 'center', background: theme === 'dark' ? '#23222a' : '#fff', borderRadius: 8, padding: '0 10px', border: '2px solid #23222a' }}>
          <span style={{ fontSize: 20, marginRight: 6 }}>📅</span>
          <select
            value={duration}
            onChange={e => setDuration(e.target.value)}
            style={{
              background: 'transparent',
              border: 'none',
              outline: 'none',
              color: duration ? (theme === 'dark' ? '#fff' : '#18171c') : '#bdbdbd',
              fontSize: 16,
              flex: 1,
              padding: '10px 0',
              appearance: 'none',
            }}
          >
            <option value="" disabled>Select Duration</option>
            {durations.map(d => <option key={d} value={d}>{d}</option>)}
          </select>
        </div>
      </div>
      <div style={{ marginBottom: 24 }}>
        <div style={{ fontWeight: 600, fontSize: 16, marginBottom: 6 }}>Who are you traveling with?</div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
          {travelGroups.map(g => (
            <button
              key={g.label}
              onClick={() => setGroup(g.label)}
              style={{
                flex: '1 1 45%',
                background: group === g.label ? '#6c63ff' : (theme === 'dark' ? '#23222a' : '#fff'),
                color: group === g.label ? '#fff' : '#bdbdbd',
                border: group === g.label ? '2px solid #6c63ff' : '2px solid #23222a',
                borderRadius: 10,
                fontSize: 17,
                fontWeight: 600,
                padding: '14px 0',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 8,
                cursor: 'pointer',
                marginBottom: 4,
              }}
            >
              <span style={{ fontSize: 20 }}>{g.icon}</span> {g.label}
            </button>
          ))}
        </div>
      </div>
      {error && <div style={{ color: '#ff5252', marginBottom: 10, textAlign: 'center', fontWeight: 600 }}>{error}</div>}
      <button onClick={handleContinue} style={{ width: '100%', background: '#2d3bfa', color: '#fff', fontWeight: 700, fontSize: 18, border: 'none', borderRadius: 10, padding: '14px 0', marginTop: 18, cursor: 'pointer', boxShadow: '0 2px 12px rgba(45,59,250,0.18)' }}>
        Continue
      </button>

      {/* Footer */}
      <div style={{
        position: 'fixed',
        left: 0,
        bottom: 0,
        width: '100vw',
        background: theme === 'dark' ? '#23222a' : '#fff',
        height: 68,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 100,
        boxShadow: '0 -2px 16px rgba(0,0,0,0.18)'
      }}>
        <div style={{ display: 'flex', width: 393, maxWidth: '100vw', justifyContent: 'space-between', alignItems: 'center', padding: '0 32px' }}>
          {/* Home Icon */}
          <div style={{ width: 44, height: 44, borderRadius: '50%', background: '#353c1a', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }} onClick={() => navigate('/')}>
            <svg width="26" height="26" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="12" fill="none"/><path d="M4 12L12 5l8 7" stroke="#d6ff00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><rect x="8" y="14" width="8" height="5" rx="1.5" stroke="#d6ff00" strokeWidth="2"/></svg>
          </div>
          {/* Search Icon */}
          <div style={{ width: 44, height: 44, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }} onClick={() => navigate('/search')}>
            <svg width="26" height="26" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="12" fill="none"/><circle cx="11" cy="11" r="6" stroke="#bdbdbd" strokeWidth="2"/><path d="M20 20l-3.5-3.5" stroke="#bdbdbd" strokeWidth="2" strokeLinecap="round"/></svg>
          </div>
          {/* Add Icon */}
          <div style={{ width: 44, height: 44, borderRadius: '50%', background: '#353c1a', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }} onClick={() => navigate('/onboarding')}>
            <svg width="26" height="26" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="12" fill="none"/><path d="M12 6v12M6 12h12" stroke="#d6ff00" strokeWidth="2" strokeLinecap="round"/></svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Onboarding; 