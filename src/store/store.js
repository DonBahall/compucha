import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import categoriesSlice from "./categories/categoriesSlice";
import productsSlice from "./categories/productsSlice";

export const store = configureStore({
    reducer: {
        categories: categoriesSlice,
        products: productsSlice,
       
    },
    // middleware: (getMiddleware) = getMiddleware().concat(apiSlice.middleware),
    devTools: true,
})