import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Dashboard.css';

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
  const [selectedDate] = useState('27');
  const activitiesByDate = activities.find(day => day.date === selectedDate)?.items || [];
  const [showAllFlights, setShowAllFlights] = useState(false);
  const [showAllAccommodations, setShowAllAccommodations] = useState(false);
  const [showAllActivities, setShowAllActivities] = useState(false);

  // Theme-related variables
  const themeColors = {
    cardBg: theme === 'dark' ? '#23222a' : '#fff',
    cardText: theme === 'dark' ? '#fff' : '#18171c',
    secondaryText: theme === 'dark' ? '#bdbdbd' : '#6b6b6b',
    footerBg: theme === 'dark' ? '#23222a' : '#e0e0e0',
    highlight: theme === 'dark' ? '#d6ff00' : '#b3d900',
    accentBg: theme === 'dark' ? '#35343c' : '#f7f7fa'
  };

  // Navigation handlers
  const goHome = () => navigate('/');
  const goSearch = () => navigate('/search');
  const goFavorites = () => navigate('/favorites');
  const goProfile = () => navigate('/profile');
  const openOnboarding = () => navigate('/onboarding');

  return (
    <div className="dashboard">
      <div className="trip-overview">
        <div className="trip-header">
          <h1>{trip.city}</h1>
          <p>{trip.dates}</p>
        </div>
        <div className="trip-image">
          <img src={trip.image} alt={trip.city} />
        </div>
      </div>

      <div className="dashboard-sections">
        <section className="flights-section">
          <div className="section-header">
            <h2>Flights</h2>
            <button onClick={() => setShowAllFlights(!showAllFlights)}>
              {showAllFlights ? 'Show Less' : 'See All'}
            </button>
          </div>
          <div className="flights-list">
            {flights.slice(0, showAllFlights ? flights.length : 1).map(flight => (
              <div key={flight.id} className="flight-card">
                <div className="flight-info">
                  <h3>{flight.airline} {flight.flightNo}</h3>
                  <div className="flight-details">
                    <div className="departure">
                      <p>{flight.departure.time}</p>
                      <p>{flight.departure.city}</p>
                      <p>{flight.departure.date}</p>
                    </div>
                    <div className="duration">
                      <div className="flight-line"></div>
                      <p>{flight.duration}</p>
                    </div>
                    <div className="arrival">
                      <p>{flight.arrival.time}</p>
                      <p>{flight.arrival.city}</p>
                      <p>{flight.arrival.date}</p>
                    </div>
                  </div>
                  <span className="status">{flight.status}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="accommodations-section">
          <div className="section-header">
            <h2>Accommodations</h2>
            <button onClick={() => setShowAllAccommodations(!showAllAccommodations)}>
              {showAllAccommodations ? 'Show Less' : 'See All'}
            </button>
          </div>
          <div className="accommodations-list">
            {accommodations.slice(0, showAllAccommodations ? accommodations.length : 1).map(accommodation => (
              <div key={accommodation.id} className="accommodation-card">
                <img src={accommodation.image} alt={accommodation.name} />
                <div className="accommodation-info">
                  <h3>{accommodation.name}</h3>
                  <p className="type">{accommodation.type}</p>
                  <p className="dates">Check-in: {accommodation.checkIn}</p>
                  <p className="dates">Check-out: {accommodation.checkOut}</p>
                  <p className="address">{accommodation.address}</p>
                  <div className="rating">
                    <span>★</span>
                    <span>{accommodation.rating}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="activities-section">
          <div className="section-header">
            <h2>Activities</h2>
            <button onClick={() => setShowAllActivities(!showAllActivities)}>
              {showAllActivities ? 'Show Less' : 'See All'}
            </button>
          </div>
          <div className="activities-list">
            {activities.slice(0, showAllActivities ? activities.length : 2).map(day => (
              <div key={day.date} className="day-activities">
                <h3 className="date-header">{day.date}</h3>
                {day.items.map(activity => (
                  <div key={activity.id} className="activity-card">
                    <h4>{activity.name}</h4>
                    <p className="time">{activity.time}</p>
                    <p className="location">{activity.location}</p>
                    <p className="type">{activity.type}</p>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default Dashboard; 