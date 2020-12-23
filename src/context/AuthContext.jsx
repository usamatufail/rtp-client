import React, { useContext, createContext, useState, useEffect } from "react";
import { auth } from "../firebase";
// Creating Authentication Context
const AuthContext = createContext();
// Function for using context
export const useAuth = () => {
  return useContext(AuthContext);
};
// Auth Provider
export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    const unsubscriber = auth.onAuthStateChange((user) => {
      setCurrentUser(user);
    });
    return unsubscriber;
  }, []);

  const signup = (email, password) => {
    auth.createUserWithEmailAndPassword(email, password);
  };

  const value = {
    currentUser,
    signup
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
