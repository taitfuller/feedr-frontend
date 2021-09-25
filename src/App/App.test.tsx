import React from "react";
import { screen } from "@testing-library/react";
import renderWithRouter from "../util/renderWithRouter";
import App from "./index";

jest.mock("../pages/DashboardPage");
jest.mock("../pages/LoginPage");
jest.mock("../pages/OnboardPage");

afterEach(() => {
  localStorage.clear();
});

describe("App", () => {
  it("Displays DashboardPage when route is `/dashboard/some-feed-id` and authenticated", () => {
    localStorage.setItem("token", "let.me.in");

    renderWithRouter(<App />, "/dashboard/some-feed-id");

    expect(screen.getByTestId("dashboard-page")).toBeTruthy();
  });

  it("Redirects to OnboardPage when route is `/dashboard` and authenticated", () => {
    localStorage.setItem("token", "let.me.in");

    const { history } = renderWithRouter(<App />, "/dashboard");

    expect(history.location.pathname).toBe("/onboard");
    expect(screen.getByTestId("onboard-page")).toBeTruthy();
  });

  it("Displays OnboardPage when route is `/onboard` and authenticated", () => {
    localStorage.setItem("token", "let.me.in");

    renderWithRouter(<App />, "/onboard");

    expect(screen.getByTestId("onboard-page")).toBeTruthy();
  });

  it("Redirects to `/onboard` when route is `/` and authenticated", () => {
    localStorage.setItem("token", "let.me.in");

    const { history } = renderWithRouter(<App />, "/");

    expect(history.location.pathname).toBe("/onboard");
    expect(screen.getByTestId("onboard-page")).toBeTruthy();
  });

  it("Redirects to `/login` when route is `/` and not authenticated", () => {
    const { history } = renderWithRouter(<App />, "/");

    expect(history.location.pathname).toBe("/login");
    expect(screen.getByTestId("login-page")).toBeTruthy();
  });

  it("Redirects to `/login` when route is `/onboard` and not authenticated", () => {
    const { history } = renderWithRouter(<App />, "/onboard");

    expect(history.location.pathname).toBe("/login");
    expect(screen.getByTestId("login-page")).toBeTruthy();
  });

  it("Redirects to `/login` when route is `/dashboard/:id` and not authenticated", () => {
    const { history } = renderWithRouter(<App />, "/dashboard/:id");

    expect(history.location.pathname).toBe("/login");
    expect(screen.getByTestId("login-page")).toBeTruthy();
  });
});
