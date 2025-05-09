import React from 'react';
import { useParams } from 'react-router-dom';
import { useApp } from '../context/AppContext';

const activities = [
  {
    id: 1,
    name: 'Eiffel Tower Visit',
    image: 'https://images.unsplash.com/photo-1543349689-9a4d426bee8e?ixlib=rb-4.0.3',
    time: '2 hours',
    price: '€26'
  },
  {
    id: 2,
    name: 'Louvre Museum Tour',
    image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?ixlib=rb-4.0.3',
    time: '3 hours',
    price: '€17'
  },
  {
    id: 3,
    name: 'Seine River Cruise',
    image: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?ixlib=rb-4.0.3',
    time: '1 hour',
    price: '€15'
  }
];

export default function TripDetails() {
  const { id } = useParams();
  const { state } = useApp();
  
  // Find the trip in our state using the id
  const trip = state.trips.find(trip => trip.id === parseInt(id));

  // If trip is not found, show a message
  if (!trip) {
    return (
      <div className="page-container">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <h1 className="page-header">Trip Not Found</h1>
            <div className="card p-8 text-center">
              <p className="text-[var(--text-secondary)]">The trip you're looking for doesn't exist or has been removed.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="page-container">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="page-header">Trip Details</h1>
          
          <div className="card overflow-hidden">
            <div className="relative h-96">
              <img
                src={trip.image || "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-4.0.3"}
                alt={trip.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-8 left-8 text-white">
                <h2 className="text-4xl font-bold mb-2">{trip.name}</h2>
                <p className="text-lg opacity-90">{trip.dates}</p>
              </div>
            </div>

            <div className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div className="space-y-4">
                  <h3 className="section-title">Trip Overview</h3>
                  <div className="space-y-2">
                    <p className="text-[var(--text-secondary)]">
                      <span className="font-medium">Duration:</span> {trip.duration}
                    </p>
                    <p className="text-[var(--text-secondary)]">
                      <span className="font-medium">Location:</span> {trip.location}
                    </p>
                    <p className="text-[var(--text-secondary)]">
                      <span className="font-medium">Accommodation:</span> {trip.accommodation}
                    </p>
                  </div>
                </div>
                <div className="space-y-4">
                  <h3 className="section-title">Weather Forecast</h3>
                  <div className="grid grid-cols-3 gap-4">
                    {['Mon', 'Tue', 'Wed'].map((day) => (
                      <div key={day} className="text-center">
                        <p className="font-medium">{day}</p>
                        <p className="text-primary">22°C</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="section-title">Planned Activities</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {activities.map((activity) => (
                    <div key={activity.id} className="card group">
                      <div className="relative h-40">
                        <img
                          src={activity.image}
                          alt={activity.name}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                      <div className="p-4">
                        <h4 className="font-semibold mb-2">{activity.name}</h4>
                        <div className="flex justify-between text-sm text-[var(--text-secondary)]">
                          <span>{activity.time}</span>
                          <span className="font-medium text-primary">{activity.price}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 