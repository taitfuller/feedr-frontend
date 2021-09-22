import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import ProtectedRoute from "../auth/ProtectedRoute";
import "./App.css";
import DashboardPage from "../pages/DashboardPage";
import LoginPage from "../pages/LoginPage";

const App: React.FC = () => (
  <Switch>
    <ProtectedRoute path="/dashboard">
      <DashboardPage />
    </ProtectedRoute>
    <Route path="/login">
      <LoginPage />
    </Route>
    <Route path="/">
      <Redirect to="/dashboard" />
    </Route>
  </Switch>
);

export default App;
