import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage.jsx"

const route = () => {
    return (
      <BrowserRouter>
        <Routes>
          {/* User Routes */}
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </BrowserRouter>
    );
  };
  
  export default route;