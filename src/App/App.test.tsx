import React from "react";
import { screen } from "@testing-library/react";
import renderWithRouter from "../util/renderWithRouter";
import App from "./index";

jest.mock("../pages/DashboardPage");

afterEach(() => {
  localStorage.clear();
});

describe("App", () => {
  it("Displays DashboardPage when route is `/dashboard` and authenticated", () => {
    localStorage.setItem("token", "let.me.in");

    renderWithRouter(<App />, "/dashboard");

    expect(screen.getByTestId("dashboard-page")).toBeTruthy();
  });

  it("Displays DashboardPage when route is `/dashboard/sub-route` and authenticated", () => {
    localStorage.setItem("token", "let.me.in");

    renderWithRouter(<App />, "/dashboard/sub-route");

    expect(screen.getByTestId("dashboard-page")).toBeTruthy();
  });

  it("Redirects to `/dashboard` when route is `/` and authenticated", () => {
    localStorage.setItem("token", "let.me.in");

    const { history } = renderWithRouter(<App />, "/");

    expect(history.location.pathname).toBe("/dashboard");
  });

  it("Redirects to `/login` when not authenticated", () => {
    const { history } = renderWithRouter(<App />, "/");

    expect(history.location.pathname).toBe("/login");
  });
});
