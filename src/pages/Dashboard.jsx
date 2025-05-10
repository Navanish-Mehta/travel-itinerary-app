import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';

// Mock user data (fallback)
const fallbackUser = {
  name: 'Traveler',
  avatar: '',
};

const trip = {
  city: 'TOKYO',
  dates: '27.01.2025 - 02.02.2025',
  image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
  days: 8,
  travelers: '4 (2M,2F)',
  activities: 14,
};

const flights = [
  {
    id: 1,
    airline: 'Japan Airlines',
    flightNo: 'JL123',
    departure: { city: 'New York', time: '10:00 AM', date: '27.01.2025' },
    arrival: { city: 'Tokyo', time: '2:00 PM', date: '28.01.2025' },
    duration: '14h 00m',
    status: 'Confirmed'
  },
  {
    id: 2,
    airline: 'ANA',
    flightNo: 'NH456',
    departure: { city: 'Tokyo', time: '4:00 PM', date: '02.02.2025' },
    arrival: { city: 'New York', time: '3:00 PM', date: '02.02.2025' },
    duration: '11h 00m',
    status: 'Confirmed'
  }
];

const accommodations = [
  {
    id: 1,
    name: 'Park Hotel Tokyo',
    type: 'Hotel',
    checkIn: '28.01.2025',
    checkOut: '02.02.2025',
    address: '1-7-1 Higashi-Shimbashi, Minato-ku, Tokyo',
    rating: 4.5,
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 2,
    name: 'Shinjuku Granbell Hotel',
    type: 'Hotel',
    checkIn: '02.02.2025',
    checkOut: '03.02.2025',
    address: '2-14-5 Kabukicho, Shinjuku-ku, Tokyo',
    rating: 4.3,
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80'
  }
];

const activities = [
  {
    date: '28.01.2025',
    items: [
      {
        id: 1,
        name: 'Tokyo Skytree Visit',
        time: '10:00 AM - 12:00 PM',
        location: 'Tokyo Skytree',
        type: 'Sightseeing',
        image: 'https://images.unsplash.com/photo-1536098561742-ca998e48cbcc?auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 2,
        name: 'Sushi Making Class',
        time: '2:00 PM - 4:00 PM',
        location: 'Tsukiji Outer Market',
        type: 'Food & Culture',
        image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=800&q=80'
      }
    ]
  },
  {
    date: '29.01.2025',
    items: [
      {
        id: 3,
        name: 'Mount Fuji Day Trip',
        time: '8:00 AM - 6:00 PM',
        location: 'Mount Fuji',
        type: 'Nature',
        image: 'https://images.unsplash.com/photo-1570459029078-1c2a7f59b5e3?auto=format&fit=crop&w=800&q=80'
      }
    ]
  },
  {
    date: '30.01.2025',
    items: [
      {
        id: 4,
        name: 'Shibuya Shopping',
        time: '11:00 AM - 4:00 PM',
        location: 'Shibuya District',
        type: 'Shopping',
        image: 'https://images.unsplash.com/photo-1542051841857-5f90071e7989?auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 5,
        name: 'Robot Restaurant Show',
        time: '7:00 PM - 9:00 PM',
        location: 'Shinjuku',
        type: 'Entertainment',
        image: 'https://images.unsplash.com/photo-1542051841857-5f90071e7989?auto=format&fit=crop&w=800&q=80'
      }
    ]
  }
];

function Dashboard({ theme = 'light', toggleTheme }) {
  const navigate = useNavigate();
  const { state } = useApp();
  const user = state?.user || fallbackUser;
  const [showAllFlights, setShowAllFlights] = useState(false);
  const [showAllAccommodations, setShowAllAccommodations] = useState(false);
  const [showAllActivities, setShowAllActivities] = useState(false);

  // Greeting name logic
  const displayName = user.name || 'Traveler';

  return (
    <div style={{
      minHeight: '100vh',
      background: theme === 'dark' ? '#18171c' : '#f7f7fa',
      color: theme === 'dark' ? '#fff' : '#18171c',
      fontFamily: 'Inter, sans-serif',
      paddingBottom: 90,
      transition: 'background 0.3s, color 0.3s',
    }}>
      {/* Theme Toggle */}
      <button onClick={toggleTheme} style={{ position: 'fixed', top: 18, right: 18, zIndex: 200, background: theme === 'dark' ? '#23222a' : '#e0e0e0', color: theme === 'dark' ? '#fff' : '#23222a', border: 'none', borderRadius: 18, padding: '8px 16px', fontWeight: 600, cursor: 'pointer', boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}>
        {theme === 'dark' ? '🌙 Dark' : '☀️ Light'}
      </button>

      <div style={{ maxWidth: 420, margin: '0 auto', padding: '0 1rem' }}>
        {/* Greeting and Trip Section */}
        <div style={{ marginTop: 32, marginBottom: 18 }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8 }}>
            <div>
              <div style={{ fontSize: 22, fontWeight: 700, color: theme === 'dark' ? '#fff' : '#18171c', marginBottom: 2 }}>Hello {displayName}!</div>
              <div style={{ fontSize: 15, color: theme === 'dark' ? '#bdbdbd' : '#6b6b6b', fontWeight: 500 }}>Ready for the trip?</div>
            </div>
            <div style={{ width: 38, height: 38, borderRadius: '50%', background: '#ff7a2f', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: 22, letterSpacing: 1 }}>
              {displayName.charAt(0).toUpperCase()}
            </div>
          </div>
          <div style={{ fontSize: 17, color: theme === 'dark' ? '#fff' : '#18171c', fontWeight: 600, marginBottom: 10 }}>Your Upcoming Trip</div>
          <div style={{ borderRadius: 18, overflow: 'hidden', background: theme === 'dark' ? '#23222a' : '#fff', boxShadow: '0 2px 16px rgba(0,0,0,0.08)', marginBottom: 10 }}>
            <div style={{ position: 'relative', height: 180 }}>
              <img src={trip.image} alt={trip.city} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(24,23,28,0.10) 40%, rgba(24,23,28,0.85) 100%)' }} />
              <div style={{ position: 'absolute', top: 18, left: 18, color: '#fff', zIndex: 2 }}>
                <div style={{ fontSize: 32, fontWeight: 900, letterSpacing: 1, lineHeight: 1.1 }}>TOKYO</div>
                <div style={{ fontSize: 15, fontWeight: 600, opacity: 0.92 }}>{trip.dates}</div>
              </div>
              <div style={{ position: 'absolute', top: 18, right: 18, color: '#fff', zIndex: 2, background: 'rgba(0,0,0,0.32)', borderRadius: '50%', width: 32, height: 32, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
                <svg width="18" height="18" fill="none" viewBox="0 0 24 24"><path d="M7 17L17 7M7 7h10v10" stroke="#fff" strokeWidth="2.2" strokeLinecap="round"/></svg>
              </div>
              <div style={{ position: 'absolute', left: 0, right: 0, bottom: 0, padding: '0 18px 14px 18px', zIndex: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 5, color: theme === 'dark' ? '#d6ff00' : '#b3d900', fontWeight: 700, fontSize: 15 }}>
                    <svg width="18" height="18" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke={theme === 'dark' ? '#d6ff00' : '#b3d900'} strokeWidth="2"/><path d="M8 12h4l2 3" stroke={theme === 'dark' ? '#d6ff00' : '#b3d900'} strokeWidth="2" strokeLinecap="round"/></svg>
                    {trip.days} Days
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 5, color: theme === 'dark' ? '#d6ff00' : '#b3d900', fontWeight: 700, fontSize: 15 }}>
                    <svg width="18" height="18" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="8" r="4" stroke={theme === 'dark' ? '#d6ff00' : '#b3d900'} strokeWidth="2"/><path d="M4 20c0-2.5 3.5-4 8-4s8 1.5 8 4" stroke={theme === 'dark' ? '#d6ff00' : '#b3d900'} strokeWidth="2"/></svg>
                    {trip.travelers} 
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 5, color: theme === 'dark' ? '#d6ff00' : '#b3d900', fontWeight: 700, fontSize: 15 }}>
                    <svg width="18" height="18" fill="none" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="4" stroke={theme === 'dark' ? '#d6ff00' : '#b3d900'} strokeWidth="2"/><path d="M8 12h8M12 8v8" stroke={theme === 'dark' ? '#d6ff00' : '#b3d900'} strokeWidth="2"/></svg>
                    {trip.activities} Activities
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Flights Section */}
        <div style={{ marginBottom: 24 }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <svg width="22" height="22" fill="none" viewBox="0 0 24 24"><path d="M2 16l20-5-8-2-2-8-5 20z" stroke={theme === 'dark' ? '#d6ff00' : '#b3d900'} strokeWidth="2"/></svg>
              <span style={{ fontWeight: 700, fontSize: 18 }}>Flights</span>
            </div>
            <button onClick={() => setShowAllFlights(!showAllFlights)} style={{ background: theme === 'dark' ? '#d6ff00' : '#b3d900', color: theme === 'dark' ? '#18171c' : '#fff', border: 'none', borderRadius: 16, padding: '4px 14px', fontWeight: 600, fontSize: 14, cursor: 'pointer', boxShadow: '0 2px 8px rgba(0,0,0,0.10)' }}>
              {showAllFlights ? 'Show Less' : 'See All'}
            </button>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {flights.slice(0, showAllFlights ? flights.length : 1).map(flight => (
              <div key={flight.id} style={{ background: theme === 'dark' ? '#23222a' : '#fff', borderRadius: 18, boxShadow: '0 4px 24px rgba(0,0,0,0.12)', padding: 18 }}>
                <div style={{ fontWeight: 600, fontSize: 16, marginBottom: 8 }}>{flight.airline} {flight.flightNo}</div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ color: theme === 'dark' ? '#bdbdbd' : '#6b6b6b', fontSize: 13 }}>{flight.departure.time}</div>
                    <div style={{ color: theme === 'dark' ? '#bdbdbd' : '#6b6b6b', fontSize: 13 }}>{flight.departure.city}</div>
                    <div style={{ color: theme === 'dark' ? '#bdbdbd' : '#6b6b6b', fontSize: 13 }}>{flight.departure.date}</div>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
                    <div style={{ width: 60, height: 2, background: theme === 'dark' ? '#d6ff00' : '#b3d900', position: 'relative' }}>
                      <div style={{ position: 'absolute', width: 6, height: 6, borderRadius: '50%', background: theme === 'dark' ? '#d6ff00' : '#b3d900', top: -2, left: 0 }}></div>
                      <div style={{ position: 'absolute', width: 6, height: 6, borderRadius: '50%', background: theme === 'dark' ? '#d6ff00' : '#b3d900', top: -2, right: 0 }}></div>
                    </div>
                    <div style={{ color: theme === 'dark' ? '#bdbdbd' : '#6b6b6b', fontSize: 12 }}>{flight.duration}</div>
                  </div>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ color: theme === 'dark' ? '#bdbdbd' : '#6b6b6b', fontSize: 13 }}>{flight.arrival.time}</div>
                    <div style={{ color: theme === 'dark' ? '#bdbdbd' : '#6b6b6b', fontSize: 13 }}>{flight.arrival.city}</div>
                    <div style={{ color: theme === 'dark' ? '#bdbdbd' : '#6b6b6b', fontSize: 13 }}>{flight.arrival.date}</div>
                  </div>
                </div>
                <div style={{ color: flight.status === 'Confirmed' ? theme === 'dark' ? '#d6ff00' : '#b3d900' : theme === 'dark' ? '#bdbdbd' : '#6b6b6b', fontWeight: 600, fontSize: 13 }}>{flight.status}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Accommodation Section */}
        <div style={{ marginBottom: 24 }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <svg width="22" height="22" fill="none" viewBox="0 0 24 24"><rect x="3" y="7" width="18" height="13" rx="2" stroke={theme === 'dark' ? '#d6ff00' : '#b3d900'} strokeWidth="2"/><path d="M16 3v4M8 3v4" stroke={theme === 'dark' ? '#d6ff00' : '#b3d900'} strokeWidth="2"/></svg>
              <span style={{ fontWeight: 700, fontSize: 18 }}>Accommodation</span>
            </div>
            <button onClick={() => setShowAllAccommodations(!showAllAccommodations)} style={{ background: theme === 'dark' ? '#d6ff00' : '#b3d900', color: theme === 'dark' ? '#18171c' : '#fff', border: 'none', borderRadius: 16, padding: '4px 14px', fontWeight: 600, fontSize: 14, cursor: 'pointer', boxShadow: '0 2px 8px rgba(0,0,0,0.10)' }}>
              {showAllAccommodations ? 'Show Less' : 'See All'}
            </button>
          </div>
          <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
            {accommodations.slice(0, showAllAccommodations ? accommodations.length : 1).map(accommodation => (
              <div key={accommodation.id} style={{ background: theme === 'dark' ? '#23222a' : '#fff', borderRadius: 16, boxShadow: '0 2px 12px rgba(0,0,0,0.14)', width: 'calc(50% - 7px)', minWidth: 150, marginBottom: 10, overflow: 'hidden', border: `1.5px solid ${theme === 'dark' ? '#d6ff00' : '#b3d900'}` }}>
                <img src={accommodation.image} alt={accommodation.name} style={{ width: '100%', height: 80, objectFit: 'cover', borderRadius: '0' }} />
                <div style={{ padding: '12px' }}>
                  <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 4 }}>{accommodation.name}</div>
                  <div style={{ fontSize: 12, color: theme === 'dark' ? '#bdbdbd' : '#6b6b6b', marginBottom: 2 }}>{accommodation.type}</div>
                  <div style={{ fontSize: 12, color: theme === 'dark' ? '#bdbdbd' : '#6b6b6b', marginBottom: 2 }}>Check-in: {accommodation.checkIn}</div>
                  <div style={{ fontSize: 12, color: theme === 'dark' ? '#bdbdbd' : '#6b6b6b', marginBottom: 2 }}>Check-out: {accommodation.checkOut}</div>
                  <div style={{ fontSize: 12, color: theme === 'dark' ? '#bdbdbd' : '#6b6b6b', marginBottom: 4 }}>{accommodation.address}</div>
                  <div style={{ fontSize: 12, color: theme === 'dark' ? '#d6ff00' : '#b3d900', fontWeight: 600 }}>★ {accommodation.rating}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Activities Section */}
        <div style={{ marginBottom: 24 }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <svg width="22" height="22" fill="none" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="4" stroke={theme === 'dark' ? '#d6ff00' : '#b3d900'} strokeWidth="2"/><path d="M8 12h8M12 8v8" stroke={theme === 'dark' ? '#d6ff00' : '#b3d900'} strokeWidth="2"/></svg>
              <span style={{ fontWeight: 700, fontSize: 18 }}>Activities</span>
            </div>
            <button onClick={() => setShowAllActivities(!showAllActivities)} style={{ background: theme === 'dark' ? '#d6ff00' : '#b3d900', color: theme === 'dark' ? '#18171c' : '#fff', border: 'none', borderRadius: 16, padding: '4px 14px', fontWeight: 600, fontSize: 14, cursor: 'pointer', boxShadow: '0 2px 8px rgba(0,0,0,0.10)' }}>
              {showAllActivities ? 'Show Less' : 'See All'}
            </button>
          </div>
          <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
            {activities.slice(0, showAllActivities ? activities.length : 2).map(day => (
              <div key={day.date} style={{ background: theme === 'dark' ? '#23222a' : '#fff', borderRadius: 16, boxShadow: '0 2px 12px rgba(0,0,0,0.14)', width: 'calc(50% - 7px)', minWidth: 150, marginBottom: 10, overflow: 'hidden', border: `1.5px solid ${theme === 'dark' ? '#d6ff00' : '#b3d900'}` }}>
                <div style={{ background: theme === 'dark' ? '#d6ff00' : '#b3d900', color: theme === 'dark' ? '#18171c' : '#fff', padding: '10px 12px', fontWeight: 600, fontSize: 14 }}>{day.date}</div>
                {day.items.map(activity => (
                  <div key={activity.id} style={{ padding: '12px', borderBottom: `1px solid ${theme === 'dark' ? '#35343c' : '#f0f0f0'}` }}>
                    <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 4 }}>{activity.name}</div>
                    <div style={{ fontSize: 12, color: theme === 'dark' ? '#bdbdbd' : '#6b6b6b', marginBottom: 2 }}>{activity.time}</div>
                    <div style={{ fontSize: 12, color: theme === 'dark' ? '#bdbdbd' : '#6b6b6b', marginBottom: 2 }}>{activity.location}</div>
                    <div style={{ fontSize: 12, color: theme === 'dark' ? '#bdbdbd' : '#6b6b6b' }}>{activity.type}</div>
                  </div>
                ))}
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
        background: theme === 'dark' ? '#23222a' : '#e0e0e0',
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
          <div style={{ width: 44, height: 44, borderRadius: '50%', background: theme === 'dark' ? '#23222a' : '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', border: `2px solid ${theme === 'dark' ? '#d6ff00' : '#b3d900'}`, cursor: 'pointer' }} onClick={() => navigate('/onboarding')}>
            <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="12" fill="none"/><path d="M12 7v10M7 12h10" stroke={theme === 'dark' ? '#d6ff00' : '#b3d900'} strokeWidth="2.5" strokeLinecap="round"/></svg>
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

export default Dashboard; 