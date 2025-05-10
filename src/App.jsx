// App.jsx
import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Search from './pages/Search';
import Favorites from './pages/Favorites';
import Profile from './pages/Profile';
import Login from './pages/Login';
import Onboarding from './pages/Onboarding';
import Register from './pages/Register';
import NotFound from './pages/NotFound';

function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard theme={theme} toggleTheme={toggleTheme} />} />
        <Route path="/search" element={<Search theme={theme} toggleTheme={toggleTheme} />} />
        <Route path="/favorites" element={<Favorites theme={theme} toggleTheme={toggleTheme} />} />
        <Route path="/profile" element={<Profile theme={theme} toggleTheme={toggleTheme} />} />
        <Route path="/login" element={<Login theme={theme} toggleTheme={toggleTheme} />} />
        <Route path="/onboarding" element={<Onboarding theme={theme} toggleTheme={toggleTheme} />} />
        <Route path="/register" element={<Register theme={theme} toggleTheme={toggleTheme} />} />
        <Route path="*" element={<NotFound theme={theme} toggleTheme={toggleTheme} />} />
      </Routes>
    </Router>
  );
}

export default App;
