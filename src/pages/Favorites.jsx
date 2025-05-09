import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const favoriteData = [
  {
    id: 1,
    name: 'Tokyo, Japan',
    image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?ixlib=rb-4.0.3',
    date: 'Added on March 1, 2024',
    description: 'Where tradition meets future',
    category: 'Cities',
  },
  {
    id: 2,
    name: 'Bali, Indonesia',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
    date: 'Added on Feb 20, 2024',
    description: 'Tropical paradise',
    category: 'Beaches',
  },
];

const recommended = [
  {
    id: 3,
    name: 'Rome, Italy',
    image: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?ixlib=rb-4.0.3',
    description: 'The Eternal City',
    category: 'Cities',
  },
  {
    id: 4,
    name: 'Swiss Alps, Switzerland',
    image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80',
    description: 'Breathtaking mountain views',
    category: 'Mountains',
  },
];

const categories = [
  { label: 'Beaches', icon: '🏖️' },
  { label: 'Mountains', icon: '🏔️' },
  { label: 'Cities', icon: '🌆' },
  { label: 'Nature', icon: '🌳' },
  { label: 'Adventure', icon: '🚵' },
];

export default function Favorites({ theme = 'light', toggleTheme }) {
  const [favorites, setFavorites] = useState(favoriteData);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const navigate = useNavigate();

  const cardBg = theme === 'dark' ? '#23222a' : '#fff';
  const cardText = theme === 'dark' ? '#fff' : '#18171c';
  const accentBg = theme === 'dark' ? '#2d3bfa' : '#e3e8ff';
  const accentText = theme === 'dark' ? '#23222a' : '#2d3bfa';
  const borderColor = theme === 'dark' ? '#23222a' : '#e0e0e0';
  const highlight = theme === 'dark' ? '#d6ff00' : '#b3d900';
  const secondaryText = theme === 'dark' ? '#bdbdbd' : '#6b6b6b';
  const footerBg = theme === 'dark' ? '#23222a' : '#e0e0e0';

  function handleRemove(id) {
    setFavorites(favorites.filter(fav => fav.id !== id));
  }

  function handleCategory(cat) {
    if (selectedCategory === cat) {
      setSelectedCategory(null);
    } else {
      setSelectedCategory(cat);
    }
  }

  const filteredFavorites = selectedCategory
    ? favorites.filter(fav => fav.category === selectedCategory)
    : favorites;

  return (
    <div style={{ background: theme === 'dark' ? '#18171c' : '#f7f7fa', minHeight: '100vh', paddingBottom: 80, color: cardText, transition: 'background 0.3s, color 0.3s' }}>
      {/* Theme Toggle */}
      <button onClick={toggleTheme} style={{ position: 'fixed', top: 18, right: 18, zIndex: 200, background: theme === 'dark' ? '#23222a' : '#e0e0e0', color: theme === 'dark' ? '#fff' : '#23222a', border: 'none', borderRadius: 18, padding: '8px 16px', fontWeight: 600, cursor: 'pointer', boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}>
        {theme === 'dark' ? '🌙 Dark' : '☀️ Light'}
      </button>
      <div style={{ maxWidth: 900, margin: '0 auto', padding: '32px 1rem 0 1rem' }}>
        <h1 style={{ fontSize: 28, fontWeight: 800, marginBottom: 24 }}>My Favorites</h1>
        {/* Categories */}
        <div style={{ marginBottom: 32 }}>
          <h2 style={{ fontWeight: 700, fontSize: 20, marginBottom: 14 }}>Browse by Category</h2>
          <div style={{ display: 'flex', gap: 18, flexWrap: 'wrap' }}>
            {categories.map(cat => (
              <div
                key={cat.label}
                onClick={() => handleCategory(cat.label)}
                style={{
                  background: selectedCategory === cat.label ? '#2d3bfa' : cardBg,
                  color: selectedCategory === cat.label ? '#fff' : cardText,
                  borderRadius: 12,
                  boxShadow: '0 1px 6px #e0e0e0',
                  padding: '16px 24px',
                  fontWeight: 700,
                  fontSize: 16,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 10,
                  cursor: 'pointer',
                  transition: 'box-shadow 0.2s',
                  border: selectedCategory === cat.label ? '2px solid #2d3bfa' : '2px solid transparent',
                }}
              >
                <span style={{ fontSize: 22 }}>{cat.icon}</span> {cat.label}
              </div>
            ))}
          </div>
        </div>
        {/* Favorites List */}
        <div style={{ marginBottom: 40 }}>
          <h2 style={{ fontWeight: 700, fontSize: 20, marginBottom: 14 }}>Recent Favorites</h2>
          {filteredFavorites.length === 0 ? (
            <div style={{ textAlign: 'center', color: '#bdbdbd', fontSize: 18, padding: 40 }}>No favorites yet.</div>
          ) : (
            <div style={{ display: 'flex', gap: 18, flexWrap: 'wrap' }}>
              {filteredFavorites.map(fav => (
                <div key={fav.id} style={{ background: cardBg, borderRadius: 16, boxShadow: '0 2px 12px #e0e0e0', width: 220, minWidth: 180, marginBottom: 18, overflow: 'hidden', cursor: 'pointer', transition: 'box-shadow 0.2s', position: 'relative' }}>
                  <img
                    src={fav.image}
                    alt={fav.name}
                    style={{ width: '100%', height: 120, objectFit: 'cover', borderRadius: '0' }}
                  />
                  <div style={{ padding: '14px 12px' }}>
                    <h3 style={{ fontWeight: 700, fontSize: 16, marginBottom: 4 }}>{fav.name}</h3>
                    <p style={{ fontSize: 14, color: secondaryText, marginBottom: 4 }}>{fav.description}</p>
                    <p style={{ fontSize: 12, color: '#bdbdbd', marginBottom: 8 }}>{fav.date}</p>
                    <button onClick={() => handleRemove(fav.id)} style={{ background: '#ff4d4f', color: '#fff', border: 'none', borderRadius: 8, padding: '6px 14px', fontWeight: 600, fontSize: 13, cursor: 'pointer' }}>Remove</button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        {/* Recommended for You */}
        <div style={{ marginBottom: 40 }}>
          <h2 style={{ fontWeight: 700, fontSize: 20, marginBottom: 14 }}>Recommended for You</h2>
          <div style={{ display: 'flex', gap: 18, flexWrap: 'wrap' }}>
            {recommended.map(destination => (
              <div key={destination.id} style={{ background: cardBg, borderRadius: 16, boxShadow: '0 2px 12px #e0e0e0', width: 220, minWidth: 180, marginBottom: 18, overflow: 'hidden', cursor: 'pointer', transition: 'box-shadow 0.2s' }}>
                <img
                  src={destination.image}
                  alt={destination.name}
                  style={{ width: '100%', height: 120, objectFit: 'cover', borderRadius: '0' }}
                />
                <div style={{ padding: '14px 12px' }}>
                  <h3 style={{ fontWeight: 700, fontSize: 16, marginBottom: 4 }}>{destination.name}</h3>
                  <p style={{ fontSize: 14, color: secondaryText }}>{destination.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
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