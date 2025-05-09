import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const categoryImages = {
  Beaches: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
  Mountains: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80',
  Cities: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=800&q=80',
  Nature: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80',
  Adventure: 'https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=800&q=80',
};

const popularDestinations = [
  { id: 1, name: 'Paris, France', image: categoryImages.Cities, description: 'The City of Light', category: 'Cities' },
  { id: 2, name: 'Tokyo, Japan', image: categoryImages.Cities, description: 'Where tradition meets future', category: 'Cities' },
  { id: 3, name: 'New York, USA', image: categoryImages.Cities, description: 'The city that never sleeps', category: 'Cities' },
  { id: 4, name: 'Bali, Indonesia', image: categoryImages.Beaches, description: 'Tropical paradise', category: 'Beaches' },
  { id: 5, name: 'Swiss Alps, Switzerland', image: categoryImages.Mountains, description: 'Breathtaking mountain views', category: 'Mountains' },
  { id: 6, name: 'Yosemite, USA', image: categoryImages.Nature, description: 'Majestic national park', category: 'Nature' },
  { id: 7, name: 'Queenstown, NZ', image: categoryImages.Adventure, description: 'Adventure capital', category: 'Adventure' },
];

const recommended = [
  { id: 8, name: 'Rome, Italy', image: categoryImages.Cities, description: 'The Eternal City', category: 'Cities' },
  { id: 9, name: 'Sydney, Australia', image: categoryImages.Beaches, description: 'Harbour City', category: 'Beaches' },
];

const categories = [
  { label: 'Beaches', icon: '🏖️' },
  { label: 'Mountains', icon: '🏔️' },
  { label: 'Cities', icon: '🌆' },
  { label: 'Nature', icon: '🌳' },
  { label: 'Adventure', icon: '🚵' },
];

export default function Search({ theme = 'light', toggleTheme }) {
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [recent, setRecent] = useState(['Paris, France', 'Tokyo, Japan']);
  const [results, setResults] = useState(popularDestinations);
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

  function handleSearch(e) {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      const filtered = popularDestinations.filter(dest =>
        dest.name.toLowerCase().includes(query.trim().toLowerCase())
      );
      setResults(filtered);
      setLoading(false);
      if (query && !recent.includes(query)) {
        setRecent([query, ...recent.slice(0, 4)]);
      }
    }, 600);
  }

  function handleCategory(cat) {
    if (selectedCategory === cat) {
      setSelectedCategory(null);
      setResults(popularDestinations);
    } else {
      setSelectedCategory(cat);
      setResults(popularDestinations.filter(dest => dest.category === cat));
    }
  }

  return (
    <div style={{ background: theme === 'dark' ? '#18171c' : '#f7f7fa', minHeight: '100vh', paddingBottom: 80, color: cardText, transition: 'background 0.3s, color 0.3s' }}>
      {/* Theme Toggle */}
      <button onClick={toggleTheme} style={{ position: 'fixed', top: 18, right: 18, zIndex: 200, background: theme === 'dark' ? '#23222a' : '#e0e0e0', color: theme === 'dark' ? '#fff' : '#23222a', border: 'none', borderRadius: 18, padding: '8px 16px', fontWeight: 600, cursor: 'pointer', boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}>
        {theme === 'dark' ? '🌙 Dark' : '☀️ Light'}
      </button>
      {/* Hero */}
      <div style={{ position: 'relative', height: 180, borderRadius: 18, overflow: 'hidden', maxWidth: 900, margin: '0 auto', marginTop: 24, boxShadow: '0 4px 24px rgba(0,0,0,0.10)' }}>
        <img
          src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3"
          alt="Travel"
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.35)' }}></div>
        <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ color: '#fff', textAlign: 'center' }}>
            <h1 style={{ fontSize: 32, fontWeight: 800, marginBottom: 8 }}>Find Your Next Adventure</h1>
            <p style={{ fontSize: 18, opacity: 0.92 }}>Discover amazing destinations around the world</p>
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 900, margin: '0 auto', padding: '32px 1rem 0 1rem' }}>
        {/* Search Form */}
        <div style={{ background: cardBg, borderRadius: 16, boxShadow: '0 2px 12px #e0e0e0', marginBottom: 32, padding: 28 }}>
          <form onSubmit={handleSearch} style={{ display: 'flex', flexWrap: 'wrap', gap: 18, alignItems: 'center', justifyContent: 'center' }}>
            <input
              type="text"
              value={query}
              onChange={e => setQuery(e.target.value)}
              placeholder="Where do you want to go?"
              style={{ flex: 2, minWidth: 180, padding: '12px 16px', borderRadius: 10, border: '1.5px solid #e0e0e0', fontSize: 16 }}
            />
            <input type="date" style={{ flex: 1, minWidth: 120, padding: '12px 10px', borderRadius: 10, border: '1.5px solid #e0e0e0', fontSize: 15 }} />
            <input type="date" style={{ flex: 1, minWidth: 120, padding: '12px 10px', borderRadius: 10, border: '1.5px solid #e0e0e0', fontSize: 15 }} />
            <button type="submit" style={{ background: '#2d3bfa', color: '#fff', border: 'none', borderRadius: 10, padding: '12px 28px', fontWeight: 700, fontSize: 16, cursor: 'pointer', boxShadow: '0 2px 8px rgba(0,0,0,0.10)' }}>Search</button>
          </form>
          {/* Recent Searches */}
          {recent.length > 0 && (
            <div style={{ marginTop: 18, display: 'flex', gap: 10, flexWrap: 'wrap', alignItems: 'center' }}>
              <span style={{ color: secondaryText, fontWeight: 600 }}>Recent:</span>
              {recent.map((item, i) => (
                <span key={i} style={{ background: '#f7f7fa', color: cardText, borderRadius: 8, padding: '4px 12px', fontSize: 14, fontWeight: 600, boxShadow: '0 1px 4px #e0e0e0', cursor: 'pointer' }}>{item}</span>
              ))}
            </div>
          )}
        </div>

        {/* Browse by Category */}
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

        {/* Search Results */}
        <div style={{ marginBottom: 40 }}>
          <h2 style={{ fontWeight: 700, fontSize: 20, marginBottom: 14 }}>Search Results</h2>
          {loading ? (
            <div style={{ textAlign: 'center', color: secondaryText, fontSize: 18, padding: 40 }}>Loading...</div>
          ) : results.length === 0 ? (
            <div style={{ textAlign: 'center', color: '#bdbdbd', fontSize: 18, padding: 40 }}>No destinations found.</div>
          ) : (
            <div style={{ display: 'flex', gap: 18, flexWrap: 'wrap' }}>
              {results.map(destination => (
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