import React, { createContext, useContext, useState } from 'react';

// Create a context
export const AppContext = createContext(null);

// Custom hook to use the App context
export const useAppContext = () => {
  return useContext(AppContext);
};

// App provider to wrap around the component tree
export const AppProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null);
  const [settings, setSettings] = useState(null);

  return (
    <AppContext.Provider value={{ token, setToken, user, setUser, settings, setSettings }}>
      {children}
    </AppContext.Provider>
  );
};
