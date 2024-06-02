import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./store/index.js";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import ArticleDetail from "./ArticleDetail.jsx";
import ArticlesPage from "./pages/ArticlesPage.jsx";
import HomePage from "./pages/HomePage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/articles",
    element: <ArticlesPage />,
  },
  {
    // path: "detail/:section/:type/:year/:month/:day/:id",
    path: "detail/:id",
    element: <ArticleDetail />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);