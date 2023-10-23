/* eslint-disable no-unused-vars */
import React from "react";
import { Home } from "./Home";
import { Routes, Route, useLocation } from "react-router-dom";
import { Cuisine } from "./Cuisine";
import { Searched } from "./Searched";
import { Recipe } from "./Recipe";
import { AnimatePresence } from "framer-motion";

export const Pages = () => {
  const location = useLocation()
  return (
    <div>
      <AnimatePresence existBeforeEnter>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/cuisine/:type" element={<Cuisine></Cuisine>}></Route>
          <Route
            path="/searched/:search"
            element={<Searched></Searched>}
          ></Route>
          <Route path="/recipe/:name" element={<Recipe></Recipe>}></Route>
        </Routes>
      </AnimatePresence>
    </div>
  );
};
