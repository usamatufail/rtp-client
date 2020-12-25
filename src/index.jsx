import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./styles/index.less";
import "./styles/main.scss";
import App from "./App";
import { AuthProvider, LoadingProvider } from "context";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <LoadingProvider>
        <AuthProvider>
          <App />
        </AuthProvider>
      </LoadingProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
