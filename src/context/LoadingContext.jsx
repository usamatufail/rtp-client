import React, { useContext, createContext, useState } from "react";
// Creating Loading Context
const LoadingContext = createContext();
// Function for using context
export const useLoading = () => {
  return useContext(LoadingContext);
};
// Loading Provider
export const LoadingProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);

  const value = {
    loading,
    setLoading,
  };

  return (
    <LoadingContext.Provider value={value}>{children}</LoadingContext.Provider>
  );
};
