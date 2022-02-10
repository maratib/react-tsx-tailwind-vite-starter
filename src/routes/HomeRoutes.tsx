import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "@/pages/About";
import Home from "@/pages/Home";
import NotFound from "@/pages/NotFound";

import SignUp from "@/pages/SignUp";
import SignIn from "@/pages/SignIn";

type Props = {
  name?: string;
};

const HomeRoutes = ({ name }: Props) => (
  <div className="min-h-screen bg-gray-300 p-10">
    <Routes>
      <Route path="/signup" element={<SignUp />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/about" element={<About />} />
      <Route path="/" element={<Home />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </div>
);

export default HomeRoutes;
