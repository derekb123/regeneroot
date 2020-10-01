import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import axios from "axios";
import "./App.css";
import Home from "./containers/Home";
import MapList from "./containers/MapList";
import LotDetail from "./containers/LotDetail";

const App = () => {
  return (
    <div>
      <Router>
          <Route path="/">
            <Home />
          </Route>
          <Route path="/mapview">
            <MapList />
          </Route>
          <Route path="/lotdetail">
            <LotDetail />
          </Route>
      </Router>
    </div>
  );
};

export default App;
