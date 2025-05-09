// API endpoints
const API_BASE_URL = 'https://api.travelitinerary.com/v1';

// Mock API calls - Replace these with actual API endpoints
export const api = {
  // User related
  getUser: async () => {
    // Simulate API call
    return {
      name: 'Navanish',
      email: 'navanish@email.com',
      avatar: 'N',
      memberSince: 'January 2024',
      totalTrips: 3,
      upcomingTrips: 1,
      completedTrips: 2,
      preferences: {
        theme: 'dark',
        notifications: true,
        language: 'en'
      }
    };
  },

  updateUser: async (userData) => {
    // Simulate API call
    return { success: true, user: userData };
  },

  updatePassword: async (currentPassword, newPassword) => {
    // Simulate API call
    return { success: true };
  },

  // Search related
  searchPlaces: async (query, filters = {}) => {
    // Simulate API call with enhanced filters
    const { category, priceRange, rating, dateRange, location } = filters;
    return [
      { 
        id: 1,
        title: 'Tokyo Tower', 
        type: 'Attraction',
        category: 'Landmark',
        rating: 4.5,
        image: 'https://images.unsplash.com/photo-1506089676908-3592f7389d4d?auto=format&fit=crop&w=800&q=80',
        location: 'Tokyo, Japan',
        price: '$15',
        description: 'Iconic communications and observation tower',
        openingHours: '9:00 AM - 11:00 PM',
        reviews: 1250
      },
      // ... more results
    ];
  },

  getSearchHistory: async () => {
    // Simulate API call
    return [
      { query: 'Tokyo', timestamp: '2024-03-15T10:30:00Z' },
      { query: 'Hotels in Kyoto', timestamp: '2024-03-14T15:45:00Z' }
    ];
  },

  // Favorites related
  getFavorites: async () => {
    // Simulate API call
    return [
      {
        id: 1,
        title: 'Tokyo Tower Visit',
        type: 'Activity',
        category: 'Sightseeing',
        rating: 4.5,
        image: 'https://images.unsplash.com/photo-1506089676908-3592f7389d4d?auto=format&fit=crop&w=800&q=80',
        location: 'Tokyo, Japan',
        price: '$15',
        date: '27.01.2025',
        notes: 'Must visit during sunset'
      },
      // ... more favorites
    ];
  },

  addToFavorites: async (item) => {
    // Simulate API call
    return { success: true, item };
  },

  removeFromFavorites: async (itemId) => {
    // Simulate API call
    return { success: true, itemId };
  },

  updateFavoriteCategory: async (itemId, category) => {
    // Simulate API call
    return { success: true, itemId, category };
  },

  shareFavorite: async (itemId, email) => {
    // Simulate API call
    return { success: true, itemId, email };
  },

  // Trips related
  getTrips: async () => {
    // Simulate API call
    return [
      {
        id: 1,
        destination: 'TOKYO',
        dates: '27.01.2025 - 02.02.2025',
        image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
        days: 8,
        travelers: '4 (2M,2F)',
        activities: 14,
        status: 'upcoming',
        budget: 5000,
        notes: 'Family vacation'
      },
      // ... more trips
    ];
  },

  createTrip: async (tripData) => {
    // Simulate API call
    return { success: true, trip: tripData };
  },

  updateTrip: async (tripId, tripData) => {
    // Simulate API call
    return { success: true, tripId, trip: tripData };
  },

  deleteTrip: async (tripId) => {
    // Simulate API call
    return { success: true, tripId };
  },

  // Theme related
  updateUserTheme: async (theme) => {
    // Simulate API call
    return { success: true, theme };
  },

  getUserPreferences: async () => {
    // Simulate API call
    return {
      theme: 'dark',
      notifications: true,
      language: 'en',
      currency: 'USD',
      timezone: 'UTC+9'
    };
  },

  updateUserPreferences: async (preferences) => {
    // Simulate API call
    return { success: true, preferences };
  }
}; 