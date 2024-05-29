// src/store.js
import { configureStore } from "@reduxjs/toolkit";
import { newsApi } from "./services/newsApi";
import { setupListeners } from "@reduxjs/toolkit/query";

export const store = configureStore({
    reducer: {
        [newsApi.reducerPath]: newsApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(newsApi.middleware),
});

setupListeners(store.dispatch);