import React, { useContext, createContext, useState, useEffect } from "react";
import { message } from "antd";
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
  // Signup Function
  const signup = async (email, password) => {
    try {
      await auth.createUserWithEmailAndPassword(email, password);
      message.success("You are successfully registered.");
    } catch (error) {
      message.error(error.message);
    }
  };
  // Logout Function
  const logout = async () => {
    try {
      await auth.signOut();
      message.success("You are logged out successfully.");
    } catch (error) {
      message.error(error.message);
    }
  };

  const value = {
    currentUser,
    signup,
    logout
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
