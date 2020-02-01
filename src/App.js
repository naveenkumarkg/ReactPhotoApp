import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";
import "./App.css";

import MainNavigation from "./shared/Components/Navigation/MainNavigation";

import User from "./user/pages/Users";
import NewPlaces from "./places/pages/newPlaces";

const App = () => {
  return (
    <Router>
      <MainNavigation />
      <main>
        <Switch>
          <Route path="/" exact>
            <User />
          </Route>
          <Route path="/places/new" exact>
            <NewPlaces />
          </Route>
          {/* <Route path="/" component={User} /> */}
          <Redirect to="/" />
        </Switch>
      </main>

    </Router>
  );
};

export default App;
