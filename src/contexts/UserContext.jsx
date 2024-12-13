import { createContext, useContext, useState } from 'react';

// # CREO UN NUOVO CONTESTO
const UserContext = createContext();

// # USO LE INFORMAZIONI (export per i consumers)
export const useUserContext = () => useContext(UserContext);

// # FORNISCO LE INFORMAZIONI (export per il provider)
export const UserContextProvider = ({ children }) => {
  const login = () => {
    const newContextData = { ...globalData, isGuest: false };
    setGlobalData(newContextData);
  };

  const logout = () => {
    const newContextData = { ...globalData, isGuest: true };
    setGlobalData(newContextData);
  };

  const [globalData, setGlobalData] = useState({
    isGuest: true,
    username: 'Tizz',
    login,
    logout,
  });

  return <UserContext.Provider value={globalData}>{children}</UserContext.Provider>;
};
