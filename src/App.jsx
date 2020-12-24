import React, { Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import { Error404, Navbar } from "components";
import pages from "pages";
import { AuthProvider } from "context/AuthContext";

function App() {
  return (
    <AuthProvider>
      <div className="app">
        <Suspense fallback={<div>...</div>}>
          <Navbar />
          <Switch>
            {pages.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                component={route.component}
                exact
              />
            ))}
            <Route component={Error404} />
          </Switch>
        </Suspense>
      </div>
    </AuthProvider>
  );
}

export default App;
