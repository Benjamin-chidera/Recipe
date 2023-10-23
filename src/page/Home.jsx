/* eslint-disable no-unused-vars */
import React from "react";
import { Popular } from "../components/Popular";
import { Vegie } from "../components/Vegie";
import { motion } from "framer-motion";

export const Home = () => {
  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Vegie></Vegie>
      <Popular></Popular>
    </motion.div>
  );
};
