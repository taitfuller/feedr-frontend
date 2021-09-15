import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import "./App.css";
import DashboardPage from "../pages/DashboardPage";

const App: React.FC = () => (
  <Switch>
    <Route path="/dashboard">
      <DashboardPage />
    </Route>
    <Route path="/">
      <Redirect to="/dashboard" />
    </Route>
  </Switch>
);

export default App;
