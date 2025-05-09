import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const trip = {
  city: 'TOKYO',
  dates: '27.01.2025 - 02.02.2025',
  image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
  days: 8,
  travelers: '4 (2M,2F)',
  activities: 14,
};

const flight = {
  date: '26.01.2025, 10:50 am',
  from: 'DEL',
  fromCity: 'Delhi, India',
  to: 'NRT',
  toCity: 'Narita, Tokyo',
};

const hotels = [
  {
    name: 'Shinagawa Prince Hotel',
    rating: 4.0,
    status: 'Confirmed',
    checkin: '26.01.2025, 11:15 pm',
    checkout: '28.01.2025, 11:15 am',
    nights: 2,
    image: 'https://images.unsplash.com/photo-1718165804028-fb2c4574ce12?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    name: 'Mercure Tokyo Hotel',
    rating: 4.1,
    status: 'Pending',
    checkin: '28.01.2025, 6:00 pm',
    checkout: '30.01.2025, 11:15 am',
    nights: 2,
    image: 'https://images.unsplash.com/photo-1723382056183-823d065ae8ed?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    name: 'APA Hotel Shinjuku',
    rating: 4.2,
    status: 'Confirmed',
    checkin: '30.01.2025, 2:00 pm',
    checkout: '31.01.2025, 11:00 am',
    nights: 1,
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Hotel Gracery Shinjuku',
    rating: 4.3,
    status: 'Pending',
    checkin: '31.01.2025, 3:00 pm',
    checkout: '02.02.2025, 11:00 am',
    nights: 2,
    image: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=800&q=80',
  },
];

const activitiesByDate = {
  '27': [
    {
      title: 'Senso-ji Temple & Nakamise Shopping Street Senso-ji',
      time: '8:15 am Morning',
      duration: '3 hours',
      pickup: 'From Hotel',
      image: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Tokyo Sky Tree',
      time: '1:00 pm Afternoon',
      duration: '3 hours',
      pickup: 'From Nakamise Street',
      image: 'https://images.unsplash.com/photo-1506089676908-3592f7389d4d?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Kimono Wearing',
      time: 'Anytime before 8:00pm',
      duration: '1-2 hours',
      pickup: 'From Hotel',
      image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80',
    },
  ],
  '28': [
    {
      title: 'Meiji Shrine',
      time: '9:00 am Morning',
      duration: '2 hours',
      pickup: 'From Hotel',
      image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Harajuku Shopping',
      time: '11:30 am',
      duration: '2 hours',
      pickup: 'From Meiji Shrine',
      image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Shibuya Crossing',
      time: '2:00 pm',
      duration: '1 hour',
      pickup: 'From Harajuku',
      image: 'https://images.unsplash.com/photo-1506089676908-3592f7389d4d?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Tokyo Tower',
      time: '4:00 pm',
      duration: '2 hours',
      pickup: 'From Shibuya',
      image: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=800&q=80',
    },
  ],
  '29': [
    {
      title: 'Imperial Palace',
      time: '10:00 am',
      duration: '2 hours',
      pickup: 'From Hotel',
      image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80',
    }
  ],
  '30': [],
  '31': [],
  '1': [],
};

const dateTabs = [
  { label: '27', month: 'JAN', day: 'MON' },
  { label: '28', month: '', day: 'TUE' },
  { label: '29', month: '', day: 'WED' },
  { label: '30', month: '', day: 'THU' },
  { label: '31', month: '', day: 'FRI' },
  { label: '1', month: 'FEB', day: 'SAT' },
];

function Dashboard({ theme, toggleTheme }) {
  const navigate = useNavigate();
  const [selectedDate] = useState('27');
  const activities = activitiesByDate[selectedDate] || [];

  // Card and section backgrounds based on theme
  const cardBg = theme === 'dark' ? '#23222a' : '#fff';
  const cardText = theme === 'dark' ? '#fff' : '#18171c';
  const secondaryText = theme === 'dark' ? '#bdbdbd' : '#6b6b6b';
  const footerBg = theme === 'dark' ? '#23222a' : '#e0e0e0';
  const highlight = theme === 'dark' ? '#d6ff00' : '#b3d900';
  const accentBg = theme === 'dark' ? '#35343c' : '#f7f7fa';

  // Navigation handlers
  const goHome = () => navigate('/');
  const goSearch = () => navigate('/search');
  const goFavorites = () => navigate('/favorites');
  const goProfile = () => navigate('/profile');
  const openOnboarding = () => navigate('/onboarding');

  return (
    <div style={{
      minHeight: '100vh',
      background: theme === 'dark' ? '#18171c' : '#f7f7fa',
      color: cardText,
      fontFamily: 'Inter, sans-serif',
      paddingBottom: 90,
      transition: 'background 0.3s, color 0.3s',
    }}>
      {/* Theme Toggle */}
      <button onClick={toggleTheme} style={{ position: 'fixed', top: 18, right: 18, zIndex: 200, background: theme === 'dark' ? '#23222a' : '#e0e0e0', color: theme === 'dark' ? '#fff' : '#23222a', border: 'none', borderRadius: 18, padding: '8px 16px', fontWeight: 600, cursor: 'pointer', boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}>
        {theme === 'dark' ? '🌙 Dark' : '☀️ Light'}
      </button>
      <div style={{ maxWidth: 420, margin: '0 auto', padding: '0 1rem' }}>
        {/* Hero/Trip Card */}
        <div style={{ margin: '32px 0 24px 0', borderRadius: 24, overflow: 'hidden', boxShadow: theme === 'dark' ? '0 6px 32px rgba(0,0,0,0.18)' : '0 2px 12px #e0e0e0', background: cardBg }}>
          <div style={{ position: 'relative', height: 80 }}>
            <img src={trip.image} alt={trip.city} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', borderRadius: '0' }} />
            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(90deg, rgba(24,23,28,0.7) 60%, rgba(24,23,28,0.1) 100%)' }} />
            <div style={{ position: 'absolute', top: 10, left: 18, color: '#fff', zIndex: 2 }}>
              <div style={{ fontSize: 20, fontWeight: 800, letterSpacing: 1, lineHeight: 1.1 }}>{trip.city}</div>
              <div style={{ fontSize: 12, fontWeight: 500, opacity: 0.92 }}>{trip.dates}</div>
            </div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: cardBg, color: cardText, padding: '12px 20px', borderRadius: '0 0 24px 24px', marginTop: -6 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 18, fontSize: 15 }}>
              <span role="img" aria-label="days">🗓️</span> {trip.days} Days
              <span role="img" aria-label="travelers">👥</span> {trip.travelers}
              <span role="img" aria-label="activities">🗺️</span> {trip.activities}
            </div>
          </div>
        </div>
        {/* Flights Section */}
        <div style={{ marginBottom: 24 }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <svg width="22" height="22" fill="none" viewBox="0 0 24 24"><path d="M2 16l20-5-8-2-2-8-5 20z" stroke={highlight} strokeWidth="2"/></svg>
              <span style={{ fontWeight: 700, fontSize: 18 }}>Flights</span>
            </div>
            <button style={{ background: highlight, color: cardBg, border: 'none', borderRadius: 16, padding: '4px 14px', fontWeight: 600, fontSize: 14, cursor: 'pointer', boxShadow: '0 2px 8px rgba(0,0,0,0.10)' }}>See all</button>
          </div>
          <div style={{ background: cardBg, borderRadius: 18, boxShadow: theme === 'dark' ? '0 4px 24px rgba(0,0,0,0.12)' : '0 2px 8px #e0e0e0', padding: 18, display: 'flex', alignItems: 'center', gap: 18 }}>
            <div style={{ flex: 1 }}>
              <div style={{ fontWeight: 600, fontSize: 16 }}>{flight.from} → {flight.to}</div>
              <div style={{ color: secondaryText, fontSize: 13 }}>{flight.fromCity} → {flight.toCity}</div>
              <div style={{ color: secondaryText, fontSize: 13, marginTop: 2 }}>{flight.date}</div>
            </div>
            <svg width="40" height="40" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="12" fill={accentBg}/><path d="M4 12L12 5l8 7" stroke={highlight} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </div>
        </div>
        {/* Accommodation Section */}
        <div style={{ marginBottom: 24 }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <svg width="22" height="22" fill="none" viewBox="0 0 24 24"><rect x="3" y="7" width="18" height="13" rx="2" stroke={highlight} strokeWidth="2"/><path d="M16 3v4M8 3v4" stroke={highlight} strokeWidth="2"/></svg>
              <span style={{ fontWeight: 700, fontSize: 18 }}>Accommodation</span>
            </div>
            <button style={{ background: highlight, color: cardBg, border: 'none', borderRadius: 16, padding: '4px 14px', fontWeight: 600, fontSize: 14, cursor: 'pointer', boxShadow: '0 2px 8px rgba(0,0,0,0.10)' }}>See all</button>
          </div>
          <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
            {hotels.map((hotel, i) => (
              <div key={i} style={{ background: cardBg, borderRadius: 16, boxShadow: theme === 'dark' ? '0 2px 12px rgba(0,0,0,0.14)' : '0 1px 4px #e0e0e0', width: 'calc(50% - 7px)', minWidth: 150, marginBottom: 10, overflow: 'hidden', border: `1.5px solid ${hotel.status === 'Confirmed' ? highlight : accentBg}` }}>
                <img src={hotel.image} alt={hotel.name} style={{ width: '100%', height: 50, objectFit: 'cover', borderRadius: '0' }} />
                <div style={{ padding: '10px 12px' }}>
                  <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 2 }}>{hotel.name}</div>
                  <div style={{ fontSize: 12, color: secondaryText }}>{hotel.nights} nights</div>
                  <div style={{ fontSize: 12, color: secondaryText }}>{hotel.checkin} - {hotel.checkout}</div>
                  <div style={{ fontSize: 12, color: hotel.status === 'Confirmed' ? highlight : accentBg, fontWeight: 600, marginTop: 2 }}>{hotel.status}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Activities Section */}
        <div style={{ marginBottom: 24 }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <svg width="22" height="22" fill="none" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="4" stroke={highlight} strokeWidth="2"/><path d="M8 12h8M12 8v8" stroke={highlight} strokeWidth="2"/></svg>
              <span style={{ fontWeight: 700, fontSize: 18 }}>Activities</span>
            </div>
            <button style={{ background: highlight, color: cardBg, border: 'none', borderRadius: 16, padding: '4px 14px', fontWeight: 600, fontSize: 14, cursor: 'pointer', boxShadow: '0 2px 8px rgba(0,0,0,0.10)' }}>See all</button>
          </div>
          <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
            {activities.map((act, i) => (
              <div key={i} style={{ background: cardBg, borderRadius: 16, boxShadow: theme === 'dark' ? '0 2px 12px rgba(0,0,0,0.14)' : '0 1px 4px #e0e0e0', width: 'calc(50% - 7px)', minWidth: 150, marginBottom: 10, overflow: 'hidden', border: `1.5px solid ${highlight}` }}>
                <img src={act.image} alt={act.title} style={{ width: '100%', height: 50, objectFit: 'cover', borderRadius: '0' }} />
                <div style={{ padding: '10px 12px' }}>
                  <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 2 }}>{act.title}</div>
                  <div style={{ fontSize: 12, color: secondaryText }}>{act.time} • {act.duration}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Fixed Footer */}
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
          <div style={{ width: 44, height: 44, borderRadius: '50%', background: '#353c1a', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }} onClick={goHome}>
            <svg width="26" height="26" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="12" fill="none"/><path d="M4 12L12 5l8 7" stroke="#d6ff00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><rect x="8" y="14" width="8" height="5" rx="1.5" stroke="#d6ff00" strokeWidth="2"/></svg>
          </div>
          {/* Search Icon */}
          <div style={{ width: 44, height: 44, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }} onClick={goSearch}>
            <svg width="26" height="26" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="12" fill="none"/><circle cx="11" cy="11" r="6" stroke="#bdbdbd" strokeWidth="2"/><path d="M20 20l-3.5-3.5" stroke="#bdbdbd" strokeWidth="2" strokeLinecap="round"/></svg>
          </div>
          {/* Add Icon */}
          <div style={{ width: 44, height: 44, borderRadius: '50%', background: cardBg, display: 'flex', alignItems: 'center', justifyContent: 'center', border: `2px solid ${highlight}`, cursor: 'pointer' }} onClick={openOnboarding}>
            <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="12" fill="none"/><path d="M12 7v10M7 12h10" stroke={highlight} strokeWidth="2.5" strokeLinecap="round"/></svg>
          </div>
          {/* Heart Icon */}
          <div style={{ width: 44, height: 44, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }} onClick={goFavorites}>
            <svg width="26" height="26" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="12" fill="none"/><path d="M16.5 8.5a3.5 3.5 0 0 0-5 0l-.5.5-.5-.5a3.5 3.5 0 0 0-5 5l.5.5L12 19l6.5-6.5.5-.5a3.5 3.5 0 0 0-5-5z" stroke="#bdbdbd" strokeWidth="2"/></svg>
          </div>
          {/* User Icon */}
          <div style={{ width: 44, height: 44, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }} onClick={goProfile}>
            <svg width="26" height="26" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="12" fill="none"/><circle cx="12" cy="10" r="4" stroke="#bdbdbd" strokeWidth="2"/><path d="M4 20c0-2.5 3.5-4 8-4s8 1.5 8 4" stroke="#bdbdbd" strokeWidth="2"/></svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard; 