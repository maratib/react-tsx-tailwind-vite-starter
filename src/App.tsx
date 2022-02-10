import { useState } from "react";
import { BrowserRouter } from "react-router-dom";

import HomeRoutes from "./routes/HomeRoutes";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <HomeRoutes />
        <Footer />
      </div>
    </BrowserRouter>
  );
}
