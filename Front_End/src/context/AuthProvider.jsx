import React, { createContext, useState, useContext } from 'react';

// Create the AuthContext
export const AuthContext = createContext();

// AuthProvider component
export default function AuthProvider({ children }) {
  // Get the initial auth user from localStorage
  const initialAuthUser = localStorage.getItem("Users");

  // Set the authUser state based on the value from localStorage
  const [authUser, setAuthUser] = useState(
    initialAuthUser ? JSON.parse(initialAuthUser) : null
  );

  return (
    <AuthContext.Provider value={[ authUser, setAuthUser ]}>
      {children}
    </AuthContext.Provider>
  );
}

// Custom hook to use the AuthContext
export const useAuth = () => useContext(AuthContext);
