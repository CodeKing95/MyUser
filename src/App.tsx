import "./app.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./rotues/Root";
import Overview from "./rotues/overview/Overview";
import CreateView from "./rotues/create/CreateView";
import EditView from "./rotues/edit/EditView";
import { useReducer } from "react";
import userManagementReducer from "./hooks/userManagementReducer";
import { UserContext } from "./context/UserContext";
import { User } from "./types/User";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/overview", element: <Overview /> },
      { path: "/create", element: <CreateView /> },
      { path: "/edit/:id", element: <EditView /> },
    ],
  },
]);

function App() {
  const [users, usersDispatch] = useReducer(
    userManagementReducer,
    [],
    fetchInitUserData
  );

  function fetchInitUserData(): User[] {
    const stringUsers = localStorage.getItem("users");
    if (stringUsers) {
      return JSON.parse(stringUsers);
    }
    return [];
  }
  return (
    <UserContext.Provider value={{ users, usersDispatch }}>
      <RouterProvider router={router} />;
    </UserContext.Provider>
  );
}

export default App;
