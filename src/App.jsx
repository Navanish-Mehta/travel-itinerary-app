// App.jsx
import React, { useState } from 'react';
import { AppProvider } from './context/AppContext';
import { Routes, Route } from 'react-router-dom';
import ThemeToggle from './components/ThemeToggle';
import Home from './pages/Dashboard';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import Trips from './pages/Trips';
import TripDetails from './pages/TripDetails';
import Favorites from './pages/Favorites';
import Search from './pages/Search';
import NotFound from './pages/NotFound';
import Onboarding from './pages/Onboarding';

export default function App() {
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => setTheme(t => (t === 'light' ? 'dark' : 'light'));
  return (
    <AppProvider>
      <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)]">
        <Routes>
          <Route path="/" element={<Home theme={theme} toggleTheme={toggleTheme} />} />
          <Route path="/login" element={<Login theme={theme} toggleTheme={toggleTheme} />} />
          <Route path="/register" element={<Register theme={theme} toggleTheme={toggleTheme} />} />
          <Route path="/profile" element={<Profile theme={theme} toggleTheme={toggleTheme} />} />
          <Route path="/trips" element={<Trips theme={theme} toggleTheme={toggleTheme} />} />
          <Route path="/trips/:id" element={<TripDetails theme={theme} toggleTheme={toggleTheme} />} />
          <Route path="/favorites" element={<Favorites theme={theme} toggleTheme={toggleTheme} />} />
          <Route path="/search" element={<Search theme={theme} toggleTheme={toggleTheme} />} />
          <Route path="/onboarding" element={<Onboarding theme={theme} toggleTheme={toggleTheme} />} />
          <Route path="*" element={<NotFound theme={theme} toggleTheme={toggleTheme} />} />
        </Routes>
        {/* <ThemeToggle /> No longer needed, handled in each page */}
      </div>
    </AppProvider>
  );
}
