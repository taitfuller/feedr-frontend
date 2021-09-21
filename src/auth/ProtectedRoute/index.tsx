import React from "react";
import { Redirect, Route, RouteProps } from "react-router-dom";
import useLocalStorage from "react-use-localstorage";
import Cookies from "js-cookie";

const ProtectedRoute: React.FC<RouteProps> = (props: RouteProps) => {
  const [token, setToken] = useLocalStorage("token");

  const cookieToken = Cookies.get("token");
  if (cookieToken) {
    setToken(cookieToken);
    Cookies.remove("token");
  }

  if (token) return <Route {...props} />;
  return <Redirect to="/login" />;
};

export default ProtectedRoute;
