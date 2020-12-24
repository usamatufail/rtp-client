import React, { useContext, createContext, useState, useEffect } from "react";
import {message} from 'antd';
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
    const unsubscriber = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
    });
    return unsubscriber;
  }, []);

  const signup = async (email, password) => {
    try {
      await auth.createUserWithEmailAndPassword(email, password);
      message.success('You are successfully registered.')
    } catch(error) {
      message.error(error.message);
    }
  };

  const value = {
    currentUser,
    signup,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
