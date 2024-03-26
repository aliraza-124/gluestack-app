import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState([]);

  const registerUser = (name, email, password) => {
    const newAuth = { name, email, password };
    setAuth(prevAuthArray => [...prevAuthArray, newAuth]);
  };

  const authenticateUser = (email, password) => {
    const userInfo = auth.find(
      item => item.email === email && item.password === password,
    );

    return userInfo ? true : false;
  };

  return (
    <AuthContext.Provider value={{ auth, registerUser, authenticateUser }}>
      {children}
    </AuthContext.Provider>
  );
};
