import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./store/index.js";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Layout.jsx";
import ArticleDetail from "./ArticleDetail.jsx";
import ArticlesPage from "./pages/ArticlesPage.jsx";
import HomePage from "./pages/HomePage.jsx";
import NewsDetailPage from "./pages/NewsDetailPage.jsx";
import SearchNewsPage from "./pages/SearchNewsPage.jsx";
import PersonalizedNewsFeed from "./pages/PersonalizedNewsFeed.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: ":newsId", element: <NewsDetailPage /> },
      { path: "articles", element: <ArticlesPage /> },
      { path: "detail/:id", element: <ArticleDetail /> },
      { path: "search", element: <SearchNewsPage /> },
      { path: "personalized", element: <PersonalizedNewsFeed /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
