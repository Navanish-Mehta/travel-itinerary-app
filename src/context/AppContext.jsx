import React, { createContext, useContext, useReducer } from 'react';

const AppContext = createContext();

const initialState = {
  user: null,
  isAuthenticated: false,
  theme: 'dark',
  trips: [],
  favorites: []
};

function appReducer(state, action) {
  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        user: action.payload,
        isAuthenticated: !!action.payload
      };
    case 'SET_THEME':
      return {
        ...state,
        theme: action.payload
      };
    case 'SET_TRIPS':
      return {
        ...state,
        trips: action.payload
      };
    case 'SET_FAVORITES':
      return {
        ...state,
        favorites: action.payload
      };
    default:
      return state;
  }
}

export function AppProvider({ children }) {
  const [state, dispatch] = useReducer(appReducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
} 