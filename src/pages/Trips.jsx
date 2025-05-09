import React from 'react';
import { Link } from 'react-router-dom';

const trips = [
  {
    id: 1,
    title: 'Paris Adventure',
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-4.0.3',
    date: 'March 15-20, 2024',
    duration: '6 days',
    location: 'Paris, France'
  },
  {
    id: 2,
    title: 'Tokyo Explorer',
    image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?ixlib=rb-4.0.3',
    date: 'April 5-12, 2024',
    duration: '8 days',
    location: 'Tokyo, Japan'
  },
  {
    id: 3,
    title: 'New York City Break',
    image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixlib=rb-4.0.3',
    date: 'May 10-15, 2024',
    duration: '5 days',
    location: 'New York, USA'
  }
];

export default function Trips() {
  return (
    <div className="page-container">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <h1 className="page-header">My Trips</h1>
          <Link to="/search" className="btn btn-primary">
            Plan New Trip
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trips.map((trip) => (
            <div key={trip.id} className="card group">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={trip.image}
                  alt={trip.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold">{trip.title}</h3>
                  <p className="text-sm opacity-90">{trip.location}</p>
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-sm text-gray-600">{trip.date}</span>
                  <span className="text-sm font-medium text-primary">{trip.duration}</span>
                </div>
                <Link 
                  to={`/trips/${trip.id}`} 
                  className="btn btn-outline w-full"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 