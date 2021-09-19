import React from "react";
import { screen } from "@testing-library/react";
import renderWithRouter from "../util/renderWithRouter";
import App from "./index";

jest.mock("../pages/DashboardPage");

describe("App", () => {
  it("Displays DashboardPage when route is `/dashboard`", () => {
    renderWithRouter(<App />, "/dashboard");

    expect(screen.getByTestId("dashboard-page")).toBeTruthy();
  });

  it("Displays DashboardPage when route is `/dashboard/sub-route`", () => {
    renderWithRouter(<App />, "/dashboard/sub-route");

    expect(screen.getByTestId("dashboard-page")).toBeTruthy();
  });

  it("Redirects to `/dashboard` when route is `/`", () => {
    const { history } = renderWithRouter(<App />, "/");

    expect(history.location.pathname).toBe("/dashboard");
  });
});
