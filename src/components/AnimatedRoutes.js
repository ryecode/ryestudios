import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { Home } from "../pages/home/Home";
import { Profile } from "../pages/profile/Profile";
import { Project } from "../pages/project/Project";
import { Contact } from "../pages/contact/Contact";
import { AnimatePresence } from "framer-motion";

export const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/project" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<h1>Page Not Found 404</h1>} />
      </Routes>
    </AnimatePresence>
  );
};
