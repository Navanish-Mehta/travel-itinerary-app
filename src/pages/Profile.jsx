import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const user = {
  name: 'Navanish Mehta',
  email: 'navanishmehta@gmail.com',
  joinDate: 'May 2025',
  trips: 5,
  favorites: 2,
  reviews: 12,
  phone: '+91 6207746066',
  location: 'Bihar, India',
  bio: 'Travel enthusiast. Love exploring new places and cultures.',
  avatar: 'https://media.licdn.com/dms/image/v2/D4D35AQE7GRYBrUrXiw/profile-framedphoto-shrink_400_400/B4DZY5z77.HwAg-/0/1744726638758?e=1747411200&v=beta&t=glEnYDG_2rZnRYUIXnE-Mgnqub5xsF2h4Ntb6Q8rAgA',
  banner: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=900&q=80',
};

const mockTrips = [
  { id: 1, name: 'Tokyo Adventure', date: 'Jan 2024', image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?ixlib=rb-4.0.3' },
  { id: 2, name: 'Bali Escape', date: 'Feb 2024', image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80' },
];
const mockFavorites = [
  { id: 1, name: 'Rome, Italy', image: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?ixlib=rb-4.0.3' },
  { id: 2, name: 'Swiss Alps', image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80' },
];

export default function Profile({ theme = 'light', toggleTheme }) {
  const [showEdit, setShowEdit] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const cardBg = theme === 'dark' ? '#23222a' : '#fff';
  const cardText = theme === 'dark' ? '#fff' : '#18171c';
  const secondaryText = theme === 'dark' ? '#bdbdbd' : '#6b6b6b';
  const footerBg = theme === 'dark' ? '#23222a' : '#e0e0e0';
  const highlight = theme === 'dark' ? '#d6ff00' : '#b3d900';

  return (
    <div style={{ background: theme === 'dark' ? '#18171c' : '#f7f7fa', minHeight: '100vh', paddingBottom: 80, color: cardText, transition: 'background 0.3s, color 0.3s' }}>
      {/* Theme Toggle */}
      <button onClick={toggleTheme} style={{ position: 'fixed', top: 18, right: 18, zIndex: 200, background: theme === 'dark' ? '#23222a' : '#e0e0e0', color: theme === 'dark' ? '#fff' : '#23222a', border: 'none', borderRadius: 18, padding: '8px 16px', fontWeight: 600, cursor: 'pointer', boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}>
        {theme === 'dark' ? '🌙 Dark' : '☀️ Light'}
      </button>
      {/* Banner */}
      <div style={{ position: 'relative', height: 180, borderRadius: '0 0 32px 32px', overflow: 'hidden', marginBottom: 0, boxShadow: '0 4px 24px rgba(0,0,0,0.10)' }}>
        <img src={user.banner} alt="Banner" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.25)' }}></div>
      </div>
      <div style={{ maxWidth: 600, margin: '0 auto', padding: '32px 1rem 0 1rem' }}>
        {/* User Card */}
        <div style={{ background: cardBg, borderRadius: 18, boxShadow: '0 2px 12px #e0e0e0', padding: 32, textAlign: 'center', marginBottom: 32, color: cardText, position: 'relative' }}>
          <img 
            src={user.avatar} 
            alt={user.name} 
            style={{ 
              width: 120, 
              height: 120, 
              borderRadius: '50%', 
              objectFit: 'cover', 
              border: `5px solid ${cardBg}`, 
              boxShadow: '0 2px 12px #e0e0e0',
              margin: '-80px auto 24px auto',
              display: 'block'
            }} 
          />
          <h1 style={{ fontSize: 28, fontWeight: 800, marginBottom: 6 }}>{user.name}</h1>
          <p style={{ fontSize: 15, color: secondaryText, marginBottom: 8 }}>{user.email}</p>
          <p style={{ fontSize: 14, color: secondaryText, marginBottom: 8 }}>Phone: {user.phone}</p>
          <p style={{ fontSize: 14, color: secondaryText, marginBottom: 8 }}>Location: {user.location}</p>
          <p style={{ fontSize: 14, color: secondaryText, marginBottom: 18 }}>Joined: {user.joinDate}</p>
          <p style={{ fontSize: 15, color: cardText, marginBottom: 18, fontStyle: 'italic' }}>{user.bio}</p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 32, marginBottom: 18 }}>
            <div>
              <div style={{ fontWeight: 700, fontSize: 18 }}>{user.trips}</div>
              <div style={{ fontSize: 13, color: secondaryText }}>Trips</div>
            </div>
            <div>
              <div style={{ fontWeight: 700, fontSize: 18 }}>{user.favorites}</div>
              <div style={{ fontSize: 13, color: secondaryText }}>Favorites</div>
            </div>
            <div>
              <div style={{ fontWeight: 700, fontSize: 18 }}>{user.reviews}</div>
              <div style={{ fontSize: 13, color: secondaryText }}>Reviews</div>
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginTop: 18 }}>
            <button onClick={() => setShowEdit(true)} style={{ background: '#2d3bfa', color: '#fff', border: 'none', borderRadius: 10, padding: '12px 0', fontWeight: 700, fontSize: 16, cursor: 'pointer', boxShadow: '0 2px 8px rgba(0,0,0,0.10)' }}>Edit Profile</button>
            <button onClick={() => setShowPassword(true)} style={{ background: cardBg, color: '#2d3bfa', border: '2px solid #2d3bfa', borderRadius: 10, padding: '12px 0', fontWeight: 700, fontSize: 16, cursor: 'pointer' }}>Change Password</button>
            <button onClick={() => navigate('/login')} style={{ background: '#ff4d4f', color: '#fff', border: 'none', borderRadius: 10, padding: '12px 0', fontWeight: 700, fontSize: 16, cursor: 'pointer' }}>Logout</button>
          </div>
        </div>
        {/* My Trips Preview */}
        <div style={{ marginBottom: 32 }}>
          <h2 style={{ fontWeight: 700, fontSize: 20, marginBottom: 14 }}>My Trips</h2>
          <div style={{ display: 'flex', gap: 18, flexWrap: 'wrap' }}>
            {mockTrips.map(trip => (
              <div key={trip.id} style={{ background: cardBg, borderRadius: 16, boxShadow: '0 2px 12px #e0e0e0', width: 180, minWidth: 140, marginBottom: 18, overflow: 'hidden', cursor: 'pointer', transition: 'box-shadow 0.2s' }}>
                <img src={trip.image} alt={trip.name} style={{ width: '100%', height: 80, objectFit: 'cover', borderRadius: '0' }} />
                <div style={{ padding: '10px 12px' }}>
                  <h3 style={{ fontWeight: 700, fontSize: 15, marginBottom: 2 }}>{trip.name}</h3>
                  <p style={{ fontSize: 13, color: secondaryText }}>{trip.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* My Favorites Preview */}
        <div style={{ marginBottom: 40 }}>
          <h2 style={{ fontWeight: 700, fontSize: 20, marginBottom: 14 }}>My Favorites</h2>
          <div style={{ display: 'flex', gap: 18, flexWrap: 'wrap' }}>
            {mockFavorites.map(fav => (
              <div key={fav.id} style={{ background: cardBg, borderRadius: 16, boxShadow: '0 2px 12px #e0e0e0', width: 140, minWidth: 100, marginBottom: 18, overflow: 'hidden', cursor: 'pointer', transition: 'box-shadow 0.2s' }}>
                <img src={fav.image} alt={fav.name} style={{ width: '100%', height: 60, objectFit: 'cover', borderRadius: '0' }} />
                <div style={{ padding: '8px 10px' }}>
                  <h3 style={{ fontWeight: 700, fontSize: 14, marginBottom: 2 }}>{fav.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Edit Profile Modal (mock) */}
      {showEdit && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.35)', zIndex: 300, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ background: cardBg, color: cardText, borderRadius: 16, boxShadow: '0 2px 12px #e0e0e0', padding: 32, minWidth: 320, textAlign: 'center' }}>
            <h2 style={{ fontWeight: 700, fontSize: 20, marginBottom: 18 }}>Edit Profile (Mock)</h2>
            <p style={{ color: secondaryText, marginBottom: 18 }}>This is a mock modal. Implement real editing as needed.</p>
            <button onClick={() => setShowEdit(false)} style={{ background: '#2d3bfa', color: '#fff', border: 'none', borderRadius: 10, padding: '10px 24px', fontWeight: 700, fontSize: 15, cursor: 'pointer' }}>Close</button>
          </div>
        </div>
      )}
      {/* Change Password Modal (mock) */}
      {showPassword && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.35)', zIndex: 300, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ background: cardBg, color: cardText, borderRadius: 16, boxShadow: '0 2px 12px #e0e0e0', padding: 32, minWidth: 320, textAlign: 'center' }}>
            <h2 style={{ fontWeight: 700, fontSize: 20, marginBottom: 18 }}>Change Password (Mock)</h2>
            <p style={{ color: secondaryText, marginBottom: 18 }}>This is a mock modal. Implement real password change as needed.</p>
            <button onClick={() => setShowPassword(false)} style={{ background: '#2d3bfa', color: '#fff', border: 'none', borderRadius: 10, padding: '10px 24px', fontWeight: 700, fontSize: 15, cursor: 'pointer' }}>Close</button>
          </div>
        </div>
      )}
      {/* Footer */}
      <div style={{
        position: 'fixed',
        left: 0,
        bottom: 0,
        width: '100vw',
        background: footerBg,
        height: 68,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 100,
        boxShadow: '0 -2px 16px rgba(0,0,0,0.18)'
      }}>
        <div style={{ display: 'flex', width: 393, maxWidth: '100vw', justifyContent: 'space-between', alignItems: 'center', padding: '0 32px' }}>
          {/* Home Icon */}
          <div style={{ width: 44, height: 44, borderRadius: '50%', background: '#353c1a', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }} onClick={() => navigate('/') }>
            <svg width="26" height="26" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="12" fill="none"/><path d="M4 12L12 5l8 7" stroke="#d6ff00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><rect x="8" y="14" width="8" height="5" rx="1.5" stroke="#d6ff00" strokeWidth="2"/></svg>
          </div>
          {/* Search Icon */}
          <div style={{ width: 44, height: 44, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }} onClick={() => navigate('/search')}>
            <svg width="26" height="26" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="12" fill="none"/><circle cx="11" cy="11" r="6" stroke="#bdbdbd" strokeWidth="2"/><path d="M20 20l-3.5-3.5" stroke="#bdbdbd" strokeWidth="2" strokeLinecap="round"/></svg>
          </div>
          {/* Add Icon */}
          <div style={{ width: 44, height: 44, borderRadius: '50%', background: cardBg, display: 'flex', alignItems: 'center', justifyContent: 'center', border: `2px solid ${highlight}`, cursor: 'pointer' }} onClick={() => navigate('/onboarding')}>
            <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="12" fill="none"/><path d="M12 7v10M7 12h10" stroke={highlight} strokeWidth="2.5" strokeLinecap="round"/></svg>
          </div>
          {/* Heart Icon */}
          <div style={{ width: 44, height: 44, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }} onClick={() => navigate('/favorites')}>
            <svg width="26" height="26" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="12" fill="none"/><path d="M16.5 8.5a3.5 3.5 0 0 0-5 0l-.5.5-.5-.5a3.5 3.5 0 0 0-5 5l.5.5L12 19l6.5-6.5.5-.5a3.5 3.5 0 0 0-5-5z" stroke="#bdbdbd" strokeWidth="2"/></svg>
          </div>
          {/* User Icon */}
          <div style={{ width: 44, height: 44, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }} onClick={() => navigate('/profile')}>
            <svg width="26" height="26" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="12" fill="none"/><circle cx="12" cy="10" r="4" stroke="#bdbdbd" strokeWidth="2"/><path d="M4 20c0-2.5 3.5-4 8-4s8 1.5 8 4" stroke="#bdbdbd" strokeWidth="2"/></svg>
          </div>
        </div>
      </div>
    </div>
  );
} 