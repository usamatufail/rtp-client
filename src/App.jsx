import React, { Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import { Error404, Navbar, Loader } from "components";
import pages from "pages";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Suspense fallback={<Loader />}>
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
  );
}

export default App;
