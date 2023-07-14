import React from "react";
import { Route, Routes  } from "react-router";
import Basket from "../pages/Basket";
import { ROUTES } from "../utils/routes";
import Home from "./Home";
import SingleProducts from "./SingleProduct";
import Products from "./Products";

function AppRouter() {
  return (
    <Routes>
      <Route index element={<Home/>}/>
      <Route path={ROUTES.PRODUCT} element={<Products/>} />
      <Route path={ROUTES.BASKET} element={<Basket/>} />
    </Routes>
  );
}

export default AppRouter;