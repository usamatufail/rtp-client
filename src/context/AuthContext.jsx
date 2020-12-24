import React, { useContext, createContext, useState, useEffect } from "react";
import { notification } from "antd";
import { auth } from "../firebase";
import { useHistory } from "react-router-dom";
// Creating Authentication Context
const AuthContext = createContext();
// Function for using context
export const useAuth = () => {
  return useContext(AuthContext);
};
// Auth Provider
export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();
  const history = useHistory();
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
      notification.success({
        message: "Registration Completed",
        description: "You are successfully registered.",
        placement: "bottomRight",
      });
      history.push("/");
    } catch (error) {
      notification.error({
        message: "Error in Registration",
        description: error.message,
        placement: "bottomRight",
      });
    }
  };
  // Login Function
  const login = async (email, password) => {
    try {
      await auth.signInWithEmailAndPassword(email, password);
      notification.success({
        message: "Signed in",
        description: "You are successfully signed in.",
        placement: "bottomRight",
      });
      history.push("/");
    } catch (error) {
      notification.error({
        message: "Error in Login",
        description: error.message,
        placement: "bottomRight",
      });
    }
  };
  // Logout Function
  const logout = async () => {
    try {
      await auth.signOut();
      notification.success({
        message: "Logged out",
        description:
          "You are logged out. Please sign in again to access other info",
        placement: "bottomRight",
      });
    } catch (error) {
      notification.error({
        message: "Error in Login",
        description: error.message,
        placement: "bottomRight",
      });
    }
  };

  const value = {
    currentUser,
    login,
    signup,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
