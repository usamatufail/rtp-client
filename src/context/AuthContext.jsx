import React, { useContext, createContext, useState, useEffect } from "react";
import { notification } from "antd";
import { auth, db } from "firebase-config";
import { useHistory } from "react-router-dom";
import { useLoading } from "context/LoadingContext";
// Creating Authentication Context
const AuthContext = createContext();
// Function for using context
export const useAuth = () => {
  return useContext(AuthContext);
};
// Auth Provider
export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const { loading, setLoading } = useLoading();
  const history = useHistory();
  console.log(loading);
  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        setLoading(true);
        const userData = await db.collection("users").doc(user.uid).get();
        user["info"] = userData.data();
        setCurrentUser(user);
        setLoading(false);
      }
    });
  }, [setLoading]);
  // Signup Function
  const signup = async (email, password, userType) => {
    try {
      setLoading(true);
      const credentials = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await db.collection("users").doc(credentials.user.uid).set({
        userType,
      });

      // Setting User in State
      const { user } = credentials;
      const userData = await db.collection("users").doc(user.uid).get();
      user["info"] = userData.data();
      setCurrentUser(user);

      notification.success({
        message: "Registration Completed",
        description: "You are successfully registered.",
        placement: "bottomRight",
      });
      setLoading(false);
      history.push("/");
    } catch (error) {
      notification.error({
        message: "Error in Registration",
        description: error.message,
        placement: "bottomRight",
      });
      setLoading(false);
    }
  };
  // Login Function
  const login = async (email, password) => {
    try {
      setLoading(true);
      const credentials = await auth.signInWithEmailAndPassword(
        email,
        password
      );

      // Setting User in State
      const { user } = credentials;
      const userData = await db.collection("users").doc(user.uid).get();
      user["info"] = userData.data();
      setCurrentUser(user);

      notification.success({
        message: "Signed in",
        description: "You are successfully signed in.",
        placement: "bottomRight",
      });
      setLoading(false);
      history.push("/");
    } catch (error) {
      notification.error({
        message: "Error in Login",
        description: error.message,
        placement: "bottomRight",
      });
      setLoading(false);
    }
  };
  // Logout Function
  const logout = async () => {
    try {
      await auth.signOut();
      setCurrentUser(null);
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
  // Reset Password Function
  const resetPassword = async (email) => {
    try {
      await auth.sendPasswordResetEmail(email);
      notification.success({
        message: "Please check your email.",
        description: "We have sent you a link to reset your password",
        placement: "bottomRight",
      });
    } catch (error) {
      notification.error({
        message: "Error",
        description: error.message,
        placement: "bottomRight",
      });
    }
  };

  const value = {
    currentUser,
    loading,
    login,
    signup,
    logout,
    resetPassword,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
