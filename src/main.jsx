import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Root.jsx";
import { UserContextProvider } from "./context/CurrentUserContext.jsx";
import DisplayProduct from "./Pages/DisplayProduct.jsx";
import NotFound from "./Pages/NotFound.jsx";
import { ApiConProvider } from "./context/ApiContext.jsx";
import { store } from "./redux/store.js";
import ViewProduct from "./Pages/ViewProduct.jsx";
import CartTable from "./Pages/CartTable.jsx";
import { Provider } from "react-redux";

const router = createBrowserRouter([
  {
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <App></App>,
      },
      {
        path: "/products",
        element: <DisplayProduct />,
      },
      {
        path: "/products/:id",
        element: <ViewProduct />,
      },
      {
        path: "/cart",
        element: <CartTable />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <ApiConProvider>
      <UserContextProvider>
        <Provider store={store}>
          <RouterProvider router={router} />
        </Provider>
      </UserContextProvider>
    </ApiConProvider>
  </>
);
