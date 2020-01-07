import React from "react";
import { BrowserRouter as Router, Route, Redirect,Switch } from "react-router-dom";
import "./App.css";

import User from "./user/pages/Users";
import NewPlaces from './places/pages/newPlaces';

const App = () => {
  return (
    <Router>
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
      
    </Router>
  );
};

export default App;
