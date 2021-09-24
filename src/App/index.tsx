import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import ProtectedRoute from "../auth/ProtectedRoute";
import "./App.css";
import DashboardPage from "../pages/DashboardPage";
import LoginPage from "../pages/LoginPage";
import OnboardPage from "../pages/OnboardPage";

const App: React.FC = () => (
  <Switch>
    <ProtectedRoute path="/dashboard">
      <DashboardPage />
    </ProtectedRoute>
    <Route path="/login">
      <LoginPage />
    </Route>
    <ProtectedRoute path="/">
      <OnboardPage />
      <Redirect to="/" />
    </ProtectedRoute>
  </Switch>
);

export default App;
