import HomePage from "./pages/HomePage";
import UsersListPage from "./pages/UsersListPage";

const Routes = [
  {
    ...HomePage,
    path: "/",
    exact: true,
  },
  {
    ...UsersListPage,
    path: "/users",
    exact: true,
  },
];

export default Routes;
