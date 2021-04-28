import React from "react";
import HomePage from "./pages/HomePage";
import UsersListPage, { loadData } from "./pages/UsersListPage";

const Routes = [
  {
    path: "/",
    component: HomePage,
    exact: true,
  },
  {
    loadData,
    path: "/users",
    component: UsersListPage,
    exact: true,
  },
];

export default Routes;
