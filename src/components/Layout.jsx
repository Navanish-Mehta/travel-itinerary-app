import React, { useState } from 'react';
import { Outlet, Link, useLocation, useNavigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';

export default function Layout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { state, actions } = useApp();
  const location = useLocation();
  const navigate = useNavigate();

  const isActive = (path) => location.pathname === path;

  const navItems = [
    { path: '/', label: 'Home', icon: '🏠' },
    { path: '/search', label: 'Search', icon: '🔍' },
    ...(state.user
      ? [
          { path: '/trips', label: 'My Trips', icon: '✈️' },
          { path: '/favorites', label: 'Favorites', icon: '⭐' },
          { path: '/profile', label: 'Profile', icon: '👤' }
        ]
      : [
          { path: '/login', label: 'Login', icon: '🔑' },
          { path: '/register', label: 'Register', icon: '📝' }
        ])
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <span className="text-2xl">✈️</span>
              <span className="font-bold text-xl">TravelIt</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center space-x-2 ${
                    isActive(item.path)
                      ? 'text-primary-color font-medium'
                      : 'text-gray-600 hover:text-primary-color'
                  }`}
                >
                  <span>{item.icon}</span>
                  <span>{item.label}</span>
                </Link>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <span className="text-2xl">☰</span>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden bg-white border-t">
            <div className="container mx-auto px-4 py-2">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center space-x-2 py-3 ${
                    isActive(item.path)
                      ? 'text-primary-color font-medium'
                      : 'text-gray-600 hover:text-primary-color'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span>{item.icon}</span>
                  <span>{item.label}</span>
                </Link>
              ))}
            </div>
          </nav>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow container mx-auto px-4 py-8">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-gray-100 py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-4">About TravelIt</h3>
              <p className="text-gray-600">
                Your personal travel companion for planning perfect trips.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {navItems.map((item) => (
                  <li key={item.path}>
                    <Link
                      to={item.path}
                      className="text-gray-600 hover:text-primary-color"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Contact</h3>
              <ul className="space-y-2 text-gray-600">
                <li>Email: support@travelit.com</li>
                <li>Phone: +1 (555) 123-4567</li>
                <li>Address: 123 Travel St, City, Country</li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t text-center text-gray-600">
            <p>&copy; {new Date().getFullYear()} TravelIt. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Fixed Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 py-2 px-4">
        <div className="container mx-auto flex justify-around items-center">
          <button onClick={() => navigate('/')} className="flex flex-col items-center">
            <span className="text-2xl">🏠</span>
            <span className="text-xs mt-1">Home</span>
          </button>
          <button onClick={() => navigate('/search')} className="flex flex-col items-center">
            <span className="text-2xl">🔍</span>
            <span className="text-xs mt-1">Search</span>
          </button>
          <button onClick={() => navigate('/onboarding')} className="flex flex-col items-center">
            <span className="text-2xl">➕</span>
            <span className="text-xs mt-1">Add</span>
          </button>
        </div>
      </div>
    </div>
  );
} 