import React from "react";
import { Typography } from "antd";
import { useAuth } from "context/AuthContext";

const Home = () => {
  const { currentUser } = useAuth();
  return (
    <div className="homepage">
      {currentUser && (
        <>
          <Typography>Logged in as:</Typography>
          <Typography>Email: {currentUser.email}</Typography>
          <Typography>UserType: {currentUser.info.userType}</Typography>{" "}
        </>
      )}
    </div>
  );
};

export default Home;
