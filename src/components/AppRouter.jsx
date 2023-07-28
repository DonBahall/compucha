import React from "react";
import { Route, Routes  } from "react-router";
import Basket from "../pages/Basket";
import { ROUTES } from "../utils/routes";
import Home from "./Home";
import Products from "./Products";
import Card from "../pages/Card/Card";

function AppRouter() {
  return (
    <Routes>
      <Route index element={<Home/>}/>
      <Route path={ROUTES.PRODUCT} element={<Products/>} />
      <Route path={ROUTES.BASKET} element={<Basket/>} />
      <Route path={ROUTES.CARD} element={<Card/>} />
    </Routes>
  );
}

export default AppRouter;