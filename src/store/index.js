// src/store.js
import { configureStore } from "@reduxjs/toolkit";
import { newsApi } from "./services/newsApi";
import { setupListeners } from "@reduxjs/toolkit/query";
import { guardianApi } from "./services/guardianApi";

export const store = configureStore({
    reducer: {
        [newsApi.reducerPath]: newsApi.reducer,
        [guardianApi.reducerPath]: guardianApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
        // getDefaultMiddleware().concat(newsApi.middleware)
        getDefaultMiddleware().concat(newsApi.middleware, guardianApi.middleware)
});

setupListeners(store.dispatch);