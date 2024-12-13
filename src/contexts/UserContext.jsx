import { createContext, useContext, useState } from 'react';

// # CREO UN NUOVO CONTESTO
const UserContext = createContext();

// # EXPORT DEL PROVIDER
export const UserContextProvider = ({ children }) => {
  // update "isGuest" to false
  const login = () => {
    setGlobalData({ ...globalData, isGuest: false });
  };

  // update "isGuest" to true
  const logout = () => {
    setGlobalData({ ...globalData, isGuest: true });
  };

  // object representing the userContext
  const [globalData, setGlobalData] = useState({
    isGuest: true,
    username: 'Tizz',
    login,
    logout,
  });

  // return user context provider
  return <UserContext.Provider value={globalData}>{children}</UserContext.Provider>;
};

// # EXPORT DEL CONTEXT PER I CONSUMERS
export const userContext = () => {
  // return object representing the userContext
  return useContext(UserContext);
};
